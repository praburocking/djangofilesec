import stripe
from .models import Stripe_customer
from django.conf import settings
from licenses.models import License
from django.shortcuts import get_object_or_404
stripe.api_key =settings.STRIPE_API_KEY


def create_customer(user,license):
    try:
        if license  is None:
            license=License.objects.filter(user=user)
        customer = stripe.Customer.create(email=user.email)
        print(customer)
        print(type(customer))
        stripe_customer=Stripe_customer(stripe_customer_id=customer.id,user=user,license=license)
        stripe_customer.save()
        return stripe_customer
    except Exception as e:
        return str(e)
def get_customer_from_stripe(user):
    customer=stripe.Customer.retrieve(get_customer(user).stripe_customer_id)
    print("customer type")
    print(type(customer))
    return customer
def get_customer(user):
    stripeUser=get_object_or_404(Stripe_customer,user=user)
    return stripeUser
def update_customer_address(user,data):
    return stripe.Customer.modify(get_customer(user).stripe_customer_id,metadata=data)
