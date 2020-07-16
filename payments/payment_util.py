import stripe
from .models import Stripe_customer
stripe.api_key = 'sk_test_Unw7PdsP5tDxm4X9SM5MQrtj00ucSnT4B1'
from licenses.models import License
from django.shortcuts import get_object_or_404

def create_customer(user,license):
    try:
        if license  is None:
            license=License.objects.filter(user=user)
        customer = stripe.Customer.create(email=user.email)
        print(customer)
        print(type(customer))
        stripe_customer=Stripe_customer(stripe_customer_id=customer.id,user=user,license=license)
        return stripe_customer.save()
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