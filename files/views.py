from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView,RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Files
from .serializers import FilesSerializers

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

# Create your views here.
