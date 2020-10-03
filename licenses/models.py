from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
import uuid

# Create your models here.


LICENSE={
    "FREE": {"NAME": "Free", "SIZE": 50,"priceId":"Free","PRODUCT_ID":"Free","PRODUCT_ID":"Free"},
    "PAID1": {"NAME": "Paid1", "SIZE": 100,"priceId":"price_1H3yk3AD7nX8Xg8myxZ505pY","PRODUCT_ID":settings.STRIPE_PLAN_A_PRODUCT_ID},
    "PAID2": {"NAME": "Paid2", "SIZE": 200,"priceId":"price_1H3ynxAD7nX8Xg8mKDhsWjHT","PRODUCT_ID":settings.STRIPE_PLAN_B_PRODUCT_ID},
}


class License(models.Model):

    licenseId=models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    userId=models.OneToOneField(get_user_model(),related_name='License',on_delete=models.CASCADE)
    licenseType=models.CharField(max_length=10,default=LICENSE["FREE"]["NAME"])
    totalSpace=models.FloatField(default=LICENSE["FREE"]["SIZE"])
    usedSpace=models.FloatField(default=0)
