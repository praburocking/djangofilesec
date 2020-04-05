from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

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
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email=models.EmailField(unique=True,max_length=255)
    max_file_size=models.IntegerField(null=False,default=100)
    used_file_size=models.IntegerField(null=False,default=0)
    verified=models.BooleanField(null=False,default=False)
    username=models.CharField(null=False,max_length=255)
    created_time=models.DateTimeField(null=False,auto_now_add=True)
    modified_time=models.DateTimeField(null=False,auto_now=True)
    active = models.BooleanField(default=True)

    #admin properties
    staff = models.BooleanField(default=False)  # a admin user; non super-user
    admin = models.BooleanField(default=False)  # a superuser

    USERNAME_FIELD='email'

    REQUIRED_FIELDS = ['username']

    def is_verified(self):
        return self.verified

    def unused_file_size(self):
        return self.max_file_size-self.used_file_size

    def add_new_file_size(self,new_file_size):
        return self.used_file_size+new_file_size

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):  # __unicode__ on Python 2
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

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

