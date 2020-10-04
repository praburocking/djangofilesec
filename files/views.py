
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListCreateAPIView,RetrieveDestroyAPIView,GenericAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Files,DownloadHistory
from .serializers import FilesSerializers,FilesDownLoadHistorySerializers
from django.shortcuts import get_object_or_404
from django.core.files import File
from django.http import HttpResponse
from .utils import decrypt,key_fuser,get_client_ip
from cryptography.fernet import InvalidToken

from knox.auth import TokenAuthentication


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class filesListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FilesSerializers
    pagination_class = StandardResultsSetPagination
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
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    def post(self,request,pk):
        try:
            print(request.data.keys())
            if "private_key" in request.data.keys():
                file=get_object_or_404(Files,pk=pk)
                key=file.private_key
                salt = file.salt.tobytes()
                file_name=file.name
                file=File(file.file,name=file.name)
                user_key = request.data["private_key"]
                file=decrypt(file,key_fuser(key,user_key),salt,file_name)
                dobj=DownloadHistory.objects.create(file=get_object_or_404(Files,pk=pk),download_success=True,ip=get_client_ip(request))
               

                return(HttpResponse(file,content_type='text/plain',))
            else:
                return Response({"exception":"invalid data"})
        except (InvalidToken):
            dobj=DownloadHistory.objects.create(file=get_object_or_404(Files,pk=pk),download_success=False,ip=get_client_ip(request))
            return Response(data={"message":"invalid key"},status=status.HTTP_401_UNAUTHORIZED)


class filesDownloadHistory(GenericAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    def get(self,request,fileId):
        try:
            downloadHistory=DownloadHistory.objects.filter(file=fileId).order_by('-time')
            downloadHistorySerializer=FilesDownLoadHistorySerializers(downloadHistory,many=True)
            data=downloadHistorySerializer.data
            return Response(data=data,status=status.HTTP_200_OK)
        except Exception as e :
            print(e)
            return Response(data={"message":"exception while retriviing the  list"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)





