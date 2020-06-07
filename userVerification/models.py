from django.contrib.auth import get_user_model
from django.db import models
import uuid


class User(models.Model):
    class Meta:
         unique_together = (('token_type', 'user'),)
    TOKEN_TYPE = (('U_V', 'USER_VERIFICATION'),)
    id=models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    token_type=models.CharField(max_length=10, choices=TOKEN_TYPE)
    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False)
    expiration_in_minutes = models.PositiveIntegerField(null=True, blank=True, default=60*24*7)
    email_token = models.CharField(max_length=100, null=True, default=None)
