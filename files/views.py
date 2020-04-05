
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListCreateAPIView,RetrieveDestroyAPIView,GenericAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Files
from .serializers import FilesSerializers
from django.shortcuts import get_object_or_404
from django.core.files import File
from django.http import HttpResponse
from .utils import decrypt,key_fuser
from cryptography.fernet import InvalidToken

class filesListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FilesSerializers
    def get_queryset(self):
        return Files.objects.filter(user=self.request.user)
    def perform_create(self,serializer):
        savedData=serializer.save(user=self.request.user)
        savedData=FilesSerializers(savedData)
        return Response(savedData.data)

class filesRetriveDestroyView(RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FilesSerializers
    queryset = Files.objects.all()

class filesDownload(GenericAPIView):
    def post(self,request,pk):
        try:
            print(request.data.keys())
            if "private_key" in request.data.keys():
                file=get_object_or_404(Files,pk=pk)
                key=file.private_key
                salt=file.salt
                file_name=file.name
                file=File(file.file,name=file.name)
                user_key = request.data["private_key"]
                file=decrypt(file,key_fuser(key,user_key),salt,file_name)
                return(HttpResponse(file,content_type='text/plain',))
            else:
                return Response({"exception":"invalid data"})
        except (InvalidToken):
            return Response(data={"message":"invalid key"},status=status.HTTP_401_UNAUTHORIZED)



