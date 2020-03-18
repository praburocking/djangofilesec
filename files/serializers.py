from rest_framework import serializers
from .models import Files

class FilesSerializers(serializers.ModelSerializer):
    id=serializers.CharField(read_only=True)
    user=serializers.CharField(read_only=True)
    class Meta:
        model=Files
        fields='__all__'
