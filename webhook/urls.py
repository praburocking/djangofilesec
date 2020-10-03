from django.urls import path
from .views import stripeHook
urlpatterns=[
  
    path(r'stripe',stripeHook.as_view())
]