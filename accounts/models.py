from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self,email,password,username):
        if not email:
            raise ValueError('Email field needed')
        if not password:
            raise ValueError('Password field is needed')
        if not username:
            username=email.split('@')[0]
        user = self.model(email=self.normalize_email(email),username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email=models.EmailField(unique=True,max_length=255)
    max_file_size=models.IntegerField(null=False,default=100)
    used_file_size=models.IntegerField(null=False,default=0)
    verified=models.BooleanField(null=False,default=False)
    username=models.TextField(null=False,max_length=255)
    USERNAME_FIELD='email'

    @property
    def is_verified(self):
        return self.verified

    @property
    def unused_file_size(self):
        return self.max_file_size-self.used_file_size

    @property
    def add_new_file_size(self,new_file_size):
        return self.used_file_size+new_file_size

    def __str__(self):
        return self.email

    objects = UserManager()

