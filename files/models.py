from django.db import models
from django.contrib.auth.models import User
from django.conf.global_settings import AUTH_USER_MODEL
from django.contrib.auth import get_user_model
import uuid
from django_s3_storage.storage import S3Storage
from .utils import get_key,encrypt,random_key_gen,CONSTANTS,key_fuser
import os

storage = S3Storage(aws_s3_bucket_name='filesec')

# Create your models here.

class Files(models.Model):
    id=models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
    file=models.FileField(null=False,storage=storage)
    name=models.TextField(null=False,default='noname')
    private_key=models.TextField(null=False,default='nokey')
    salt=models.BinaryField(null=False,default=os.urandom(16),max_length=100)
    format=models.TextField(null=False,default='noformat')
    size=models.IntegerField(null=False,default=0)
    user=models.ForeignKey(get_user_model(),related_name='Files',on_delete=models.CASCADE)



    def save(self,*args,**kargs):
            self.name =self.file.name
            self.file.name=str(self.id)
            self.size=self.file.size
            user_key=self.private_key
            self.private_key=random_key_gen(CONSTANTS["RANDOM_KEY_MAX_LEN"])
            print(random_key_gen(CONSTANTS["RANDOM_KEY_MAX_LEN"]))
            self.file=encrypt(self.file,key_fuser(self.private_key,user_key),self.salt)
            super().save(*args,**kargs)


    def __str__(self):
        return self.user.username+"_"+self.file.name+"_"+self.name

