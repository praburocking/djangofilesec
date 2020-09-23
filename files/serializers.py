from rest_framework import serializers
from .models import Files,DownloadHistory

class FilesSerializers(serializers.ModelSerializer):
    id=serializers.CharField(read_only=True)
    user=serializers.CharField(read_only=True)
    name=serializers.CharField(read_only=True)
    private_key=serializers.CharField(write_only=True)
    file=serializers.FileField(write_only=True)

    def update(self, instance, validated_data):
        instance.email = validated_data.get('description', instance.description)    
        return instance
    
    class Meta:
        model=Files
        fields=['id','user','file','private_key','name','description','modified_time','created_time','size']

class FilesDownLoadHistorySerializers(serializers.ModelSerializer):
    class Meta:
        model=DownloadHistory
        fields='__all__'
       
