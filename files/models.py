from django.db import models
from django.contrib.auth.models import User
from django.conf.global_settings import AUTH_USER_MODEL
from django.contrib.auth import get_user_model
import uuid
from django_s3_storage.storage import S3Storage
from .utils import get_key,encrypt,random_key_gen,CONSTANTS,key_fuser
import os
from licenses.util import LicenseUtil
from api.middleware import CurrentUserMiddleware as cum
from crum import get_current_request


storage = S3Storage(aws_s3_bucket_name='filesec')

# Create your models here.

class FileManager(models.QuerySet):
    def create(self,*args,**kargs):
        return super(FileManager,self).create(*args,**kargs)

    def delete(self):
        for obj in self.get_queryset():
            obj.delete()


class Files(models.Model):
    id=models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
    file=models.FileField(null=False,storage=storage)
    name=models.TextField(null=False,default='noname')
    private_key=models.TextField(null=False,default='nokey')
    salt=models.BinaryField(null=False,default=b'\xc1\x10\xcd\x13\xc3\xf2\x8d=\xb9\xd7\x1e0$\x81\xdel',max_length=60)
    format=models.TextField(null=False,default='noformat')
    size=models.FloatField(null=False,default=0)
    user=models.ForeignKey(get_user_model(),related_name='Files',on_delete=models.CASCADE)
    description=models.TextField(null=True)
    created_time = models.DateTimeField(auto_now_add=True)
    modified_time = models.DateTimeField(auto_now=True)
    
    def save(self,*args,**kargs):
        if self._state.adding :
            
            self.name =self.file.name
            #self.id=cum.get_current_user().id+"_"+self.id
            #self.id=get_current_request().user.id+"_"+str(self.id)
            self.file.name=str(self.id)
            self.size=self.file.size/1000000
            self.salt=os.urandom(16)
            user_key=self.private_key
            self.private_key=random_key_gen(CONSTANTS["RANDOM_KEY_MAX_LEN"])
            self.file=encrypt(self.file,key_fuser(self.private_key,user_key),self.salt)
            licenseUtil=LicenseUtil(self.user)
            if licenseUtil.checkSizeExist(self.size):
                licenseUtil.updateUsedSize(self.size,True)
                super().save(*args,**kargs)
        else:
            super().save(*args,**kargs)


    def delete(self,*args,**kwargs):
        size=self.file.size/1000000
        self.file.delete()
        licenseUtil=LicenseUtil(self.user)
        licenseUtil.updateUsedSize(size,False)
        super(Files, self).delete(*args, **kwargs)


    def __str__(self):
        return self.user.username+"_"+self.file.name+"_"+self.name
    objects=FileManager.as_manager()

class DownloadHistory(models.Model):
     id=models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
     file=models.ForeignKey(Files,related_name='downloadHistory',on_delete=models.CASCADE)
     time=models.DateTimeField(auto_now_add=True)
     ip=models.TextField(null=False)
     download_success=models.BooleanField(default=False)

     class Meta:
        permissions = (
            ('view_current_downloadhistory', 'view current downloadhistory'),
        )

