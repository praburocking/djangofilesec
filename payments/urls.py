from django.urls import path
from .views import createSubscription,stripe_customer
urlpatterns=[
    path(r'createSubscription',createSubscription.as_view()),
    path(r'stripe/customer',stripe_customer.as_view())
]