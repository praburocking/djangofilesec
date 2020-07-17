from django.db import models
from django.contrib.auth import get_user_model
from licenses.models import License
import uuid
# Create your models here.
class Stripe_customer(models.Model):
    stripe_customer_id=models.CharField(max_length=50,null=False,editable=False)
    id=models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
    user=models.OneToOneField(get_user_model(),related_name='Stripe_customer',on_delete=models.CASCADE)
    license=models.OneToOneField(License,related_name='License',on_delete=models.CASCADE)
    stripe_product_id=models.CharField(max_length=50,null=True)
    stripe_subscription_id=models.CharField(max_length=50,null=True)
    stripe_default_card=models.CharField(max_length=50,null=True)
    stripe_price_id=models.CharField(max_length=50,null=True)

    def __str__(self):
        return self.stripe_customer_id
    
