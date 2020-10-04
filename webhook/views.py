from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.authentication import BasicAuthentication
from django.conf import settings
import stripe

from payments.models import Stripe_customer
from licenses.models import LICENSE
from licenses.util import LicenseUtil

import logging
from http import HTTPStatus

class stripeHook(APIView):
    endpoint_secret=settings.STRIPE_WH_SCRECT
    authentication_classes = [BasicAuthentication]
    def post(self,request):
        payload = request.body
        sig_header = request.META['HTTP_STRIPE_SIGNATURE']
        event = None

        try:
            event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
            )
        except ValueError as e:
            # Invalid payload
            return HttpResponse(status=400,data={"status":"invalid payload"})
        except stripe.error.SignatureVerificationError as e:
            # Invalid signature
            return Response(status=400,data={"status":"invalid header"})

        # Handle the event
        if event.type == 'customer.subscription.updated':
            subscription_event = event.data.object
            if(subscription_event.status=='active'):
                stripeUser=get_object_or_404(Stripe_customer,stripe_customer_id=subscription_event.customer)
                licenseUtil=LicenseUtil(userId=stripeUser.user.id,licenseId=None)
                for i in LICENSE:
                   if LICENSE[i]['PRODUCT_ID']==subscription_event.product:
                        licenseUtil.updateLicense(totalSpace=LICENSE[i]['SIZE'],licenseType=LICENSE[i]['NAME'])
                return Response(status=200,data={"status":"license_updated"})
            else:
                 return Response(status=400,data={"status":"invalid status type"})
        else:
            return Response(status=400,data={"status":"invalid event type"})


        
                





