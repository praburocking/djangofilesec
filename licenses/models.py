from django.db import models
from django.contrib.auth import get_user_model
import uuid

# Create your models here.



LICENSE={
    "FREE": {"NAME": "Free", "SIZE": 50,"priceId":"Free"},
    "PAID1": {"NAME": "Paid1", "SIZE": 100,"priceId":"price_1H3yk3AD7nX8Xg8myxZ505pY"},
    "Paid2": {"NAME": "Paid2", "SIZE": 200,"priceId":"price_1H3ynxAD7nX8Xg8mKDhsWjHT"},
}


class License(models.Model):

    licenseId=models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    userId=models.OneToOneField(get_user_model(),related_name='License',on_delete=models.CASCADE)
    licenseType=models.CharField(max_length=10,default=LICENSE["FREE"]["NAME"])
    totalSpace=models.FloatField(default=LICENSE["FREE"]["SIZE"])
    usedSpace=models.FloatField(default=0)
