from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
from django_s3_storage.storage import S3Storage
import uuid
import guardian
from guardian.mixins import GuardianUserMixin
from django.contrib.auth.models import PermissionsMixin
storage = S3Storage(aws_s3_bucket_name='filesec-userimage')

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self,email,password,username,**kargs):
        if not email:
            raise ValueError('Email field needed')
        if not password:
            raise ValueError('Password field is needed')
        if not username:
            username=email.split('@')[0]
        user = self.model(email=self.normalize_email(email),username=username,**kargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password,**kargs):
        user = self.create_user(email, password=password,**kargs)
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password,**kargs):
        user = self.create_user(email=email,password=password,**kargs)
        user.staff = True
        user.admin = True
        user.is_superuser=True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser,PermissionsMixin,guardian.mixins.GuardianUserMixin):

    id=models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    email=models.EmailField(unique=True,max_length=255)
    verified=models.BooleanField(null=False,default=False)
    username=models.CharField(null=False,max_length=255)
    created_time=models.DateTimeField(null=False,auto_now_add=True)
    modified_time=models.DateTimeField(null=False,auto_now=True)
    user_image=models.ImageField(null=True,storage=storage)
    active = models.BooleanField(default=True)
    #admin properties
    staff = models.BooleanField(default=False)  # a admin user; non super-user
    admin = models.BooleanField(default=False)  # a superuser
    is_superuser=models.BooleanField(default=False)

    USERNAME_FIELD='email'

    REQUIRED_FIELDS = ['username']

    def is_verified(self):
        return self.verified

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):  # __unicode__ on Python 2
        return self.email
        
    @property
    def is_staff(self):

        return self.staff

    @property
    def is_admin(self):
        "Is the user a admin member?"
        return self.admin

    @property
    def is_active(self):
        "Is the user active?"
        return self.active

    objects = UserManager()

