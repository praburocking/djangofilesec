from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import  get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import  csrf_exempt
from knox.models import AuthToken
# Create your views here.

class createUser(APIView):
    authentication_classes = [BasicAuthentication]
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            if user:
                return Response({"user":serializer.data,"authtoken": AuthToken.objects.create(user)[1]}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class userExist(APIView):
    authentication_classes = [BasicAuthentication]
    def get(self,request):
        email=None
        username=None
        user=None
        if "email" in request.query_params.keys():
            email=request.query_params['email']
            user = get_object_or_404(User.objects.all(), email=email)
            return (Response(status=status.HTTP_200_OK, data={"detail":"found"}))
        elif "username" in request.query_params.keys():
            username=request.query_params["username"]
            user = get_object_or_404(User.objects.all(), username=username)
            return (Response(status=status.HTTP_200_OK,data={"detail":"found"}))
        else:
            return Response(data={"details": "invalid param"}, status=status.HTTP_400_BAD_REQUEST)









class loginView(APIView):
    authentication_classes = [BasicAuthentication]
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request,*args,**kwargs)
    def post(self,request):
        try:
            if not request.user.is_authenticated:
                user=User.objects.all()
                user=get_object_or_404(user,email=request.data['email'])
                user=authenticate(username=user.username,password=request.data['password'])
                if user is not None:
                    return Response(data={"user":UserSerializer(instance=user).data,"authtoken": AuthToken.objects.create(user)[1]})
                else:
                    return Response(data={"detail":"invalid email/password"},status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response(data={"detail":request.user.username+" already logged in"},status=status.HTTP_401_UNAUTHORIZED)

        except KeyError:
            return Response(data={"detail":"invalid inputdata"},status=status.HTTP_400_BAD_REQUEST)


# class logoutView(APIView):
#     def post(self,request):
#         try:
#             if request.user.is_authenticated:
#                 logout(request)
#                 return Response(data={"detail": "logged-out"}, status=status.HTTP_200_OK)
#             else:
#                 return Response(data={"detail": "no user found"}, status=status.HTTP_401_UNAUTHORIZED)
#         except:
#             return Response(data={"detail":"exception while logging-out"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class accountsView(APIView):
    def delete(self, request, format='json'):
        if request.user.is_authenticated:
            queryset = User.objects.all()
            queryset = get_object_or_404(queryset, pk=request.user.id)
            queryset.delete()
            return Response(data={"detail": "user deleted"}, status=status.HTTP_200_OK)
    def get(self,request):
        if request.user.is_authenticated:
            queryset=User.objects.all()
            queryset=get_object_or_404(queryset,pk=request.user.id)
            US=UserSerializer(queryset)
            return Response(data=US.data)
        else:
            return Response(data={"detail":"Unauthorized Access"},status=status.HTTP_401_UNAUTHORIZED)
