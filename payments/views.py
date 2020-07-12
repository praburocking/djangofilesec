from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
import stripe
from .payment_util import get_customer_from_stripe,update_customer_address
from licenses.models import LICENSE
from licenses.util import LicenseUtil
from .models import Stripe_customer

# Create your views here.
class createSubscription(APIView):
    def post(self,request):
        #data = json.loads(request.data)
        data=request.data
        try:
            stripe_customer=Stripe_customer.objects.get(user=request.user)
            #if stripe.stripe_product_id
            
            if stripe_customer.stripe_price_id==data["priceId"]:
                return Response({"message":"no subscription change"})
            # Attach the payment method to the customer
            print(data)
            if stripe_customer.stripe_default_card is None:
                paymentAttach=stripe.PaymentMethod.attach(data['paymentMethodId'],customer=data['customerId'])
                # Set the default payment method on the customer
                stripe.Customer.modify(data['customerId'],invoice_settings={'default_payment_method': data['paymentMethodId']})
                stripe_customer.stripe_default_card=data['paymentMethodId']

            # Create the subscription
            if stripe_customer.stripe_subscription_id is not None and stripe_customer.stripe_subscription_id!='':
                stripe.Subscription.delete(stripe_customer.stripe_subscription_id)
            if data["priceId"]!="free":
                subscription=stripe.Subscription.create(customer=data['customerId'],items=[{"price": data['priceId']}],expand=['latest_invoice.payment_intent'])
                stripe_customer.stripe_subscription_id=subscription.id
                stripe_customer.stripe_price_id=data["priceId"]
            else:
                stripe_customer.stripe_subscription_id=None
                stripe_customer.stripe_price_id=None

            #enabling the service if if payment is suceeded
            if subscription.latest_invoice.payment_intent.status=="succeeded":
                licenseUtil=LicenseUtil(userId=request.user.id,licenseId=None)
                for i in LICENSE:
                   if LICENSE[i]['priceId']==data['priceId']:
                        licenseUtil.updateLicense(totalSpace=LICENSE[i]['SIZE'],licenseType=LICENSE[i]['NAME'])
            print(subscription)
            
            stripe_customer.save()
            return Response(subscription)
        except Exception as e:
            print(e)
            stripe_customer.save()
            exp={"message":"exception while creating subscription"}
            return Response(exp)

class stripe_customer(APIView):
    def get(self,request):
        return(Response(data=get_customer_from_stripe(request.user)))
    def patch(self,request):
        return Response(data=update_customer_address(request.user,request.data))