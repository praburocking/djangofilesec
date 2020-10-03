from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
import stripe

from licenses.models import LICENSE
from licenses.util import LicenseUtil
import logging
from http import HTTPStatus

class stripeHook(APIView):
     def post(self,request):
         print(request.data)
         return (Response())