from django.db import models
from django.contrib.auth.models import User
import uuid
from django_s3_storage.storage import S3Storage
from .utils import CONSTANTS

storage = S3Storage(aws_s3_bucket_name='filesec')

# Create your models here.

class Files(models.Model):
    id=models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
    file=models.FileField(null=False,storage=storage)
    name=models.TextField(null=False,default='noname')
    private_key=models.TextField(null=False,default='nokey')
    format=models.TextField(null=False,default='noformat')
    size=models.IntegerField(null=False,default=0)
    user=models.ForeignKey(User,related_name='Files',on_delete=models.CASCADE)

    def save(self,*args,**kargs):
        if(self.file.size<1000):
            self.name =self.file.name
            self.file.name=str(self.id)
            self.size=self.file.size
            super().save(*args,**kargs)
        else:
              Exception("File size exceeded")


    def __str__(self):
        return self.user.username+"_"+self.file.name+"_"+self.name

