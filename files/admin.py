from django.contrib import admin
from .models import Files

# Register your models here.
class FileAdmin(admin.ModelAdmin):
    pass
admin.site.register(Files, FileAdmin)