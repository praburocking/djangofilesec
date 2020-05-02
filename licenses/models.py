from django.db import models
from django.contrib.auth import get_user_model
import uuid

# Create your models here.



LICENSE={
    "FREE": {"NAME": "Free", "SIZE": 100},
    "PAID1": {"NAME": "Paid1", "SIZE": 500},
    "Paid2": {"NAME": "Paid2", "SIZE": 1000},
}


class License(models.Model):

    licenseId=models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    userId=models.OneToOneField(get_user_model(),related_name='License',on_delete=models.CASCADE)
    licenseType=models.CharField(max_length=10,default=LICENSE["FREE"]["NAME"])
    totalSpace=models.FloatField(default=LICENSE["FREE"]["SIZE"])
    usedSpace=models.FloatField(default=0)
