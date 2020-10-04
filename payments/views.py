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
import logging
from http import HTTPStatus
from .serializers import StripeCustomerSerializer
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication


logger=logging.getLogger(__name__)
logger.setLevel(logging.INFO)
# Create your views here.
class createSubscription(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    def post(self,request):
        #data = json.loads(request.data)
        data=request.data
        try:
            stripe_customer=Stripe_customer.objects.get(user=request.user)
            #if stripe.stripe_product_id
            
            if stripe_customer.stripe_price_id==data["priceId"]:
                return Response({"message":"no subscription change"})
            # Attach the payment method to the customer
            logger.info("input data "+str(data))
            if (stripe_customer.stripe_default_card is None or data['paymentMethodId']!=stripe_customer.stripe_default_card) and data["priceId"]!="Free":
                paymentAttach=stripe.PaymentMethod.attach(data['paymentMethodId'],customer=data['customerId'])
                # Set the default payment method on the customer
                stripe.Customer.modify(data['customerId'],invoice_settings={'default_payment_method': data['paymentMethodId']})
                stripe_customer.stripe_default_card=data['paymentMethodId']

            # Create the subscription
            subscription=None
            if stripe_customer.stripe_subscription_id is not None and stripe_customer.stripe_subscription_id!='':
                stripe.Subscription.delete(stripe_customer.stripe_subscription_id)
            if data["priceId"]!="Free":
                subscription=stripe.Subscription.create(customer=data['customerId'],items=[{"price": data['priceId']}],expand=['latest_invoice.payment_intent'])
                logger.info("subscription id"+str(subscription.id))
                stripe_customer.stripe_subscription_id=subscription.id
                stripe_customer.stripe_price_id=data["priceId"]
            else:
                stripe_customer.stripe_subscription_id=None
                stripe_customer.stripe_price_id=None

            #enabling the service if if payment is suceeded
            if data["priceId"]=="Free"  or subscription.latest_invoice.payment_intent.status=="succeeded":
                licenseUtil=LicenseUtil(userId=request.user.id,licenseId=None)
                for i in LICENSE:
                   if LICENSE[i]['PRODUCT_ID']==data['productId']:
                        licenseUtil.updateLicense(totalSpace=LICENSE[i]['SIZE'],licenseType=LICENSE[i]['NAME'])
            logger.info("Stripe customer before saving "+str(stripe_customer))
            stripe_customer.save()
            stripe_customer_serializer=StripeCustomerSerializer(stripe_customer)
            if(subscription is not None):
                subscription.update({"model_data":stripe_customer_serializer.data})
            else:
                subscription={"model_data":stripe_customer_serializer.data}
            return Response(subscription)
        except Exception as e:
            logger.exception(str(e))
            stripe_customer.save()
            exp={"message":"exception while creating subscription"}
            return Response(exp,status=HTTPStatus.INTERNAL_SERVER_ERROR)

class stripe_customer(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    def get(self,request):
        return(Response(data=get_customer_from_stripe(request.user)))
    def patch(self,request):
        return Response(data=update_customer_address(request.user,request.data))