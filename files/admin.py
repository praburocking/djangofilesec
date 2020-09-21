from django.contrib import admin
from .models import Files,DownloadHistory

# Register your models here.
class FileAdmin(admin.ModelAdmin):
    pass
admin.site.register(Files, FileAdmin)

class DownloadHistoryAdmin(admin.ModelAdmin):
    pass
admin.site.register(DownloadHistory, DownloadHistoryAdmin)