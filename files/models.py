from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

class Files(models.Model):
    id=models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
    file=models.CharField(null=False,max_length=255)
    user=models.ForeignKey(User,related_name='Files',on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username+"_"+self.file
