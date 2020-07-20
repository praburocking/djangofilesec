from rest_framework import serializers
from .models import Stripe_customer

class StripeCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Stripe_customer
        fields='__all__'
