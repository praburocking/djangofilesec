from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer,UserUpdateSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from knox.models import AuthToken
from knox.auth import TokenAuthentication
from .models import User
from django.http.response import HttpResponse
from django.core.files import File
from .email import user_mail
from licenses.models import License,LICENSE
from licenses.serializer import LicenseSerializer
from licenses.util import LicenseUtil
from django.contrib.auth import get_user_model
from userVerification import sendConfirm

# Create your views here.

class createUser(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            licen= License.objects.create(userId=user,licenseType=LICENSE["FREE"]["NAME"],totalSpace=LICENSE["FREE"]["SIZE"])
            licenSerializer=LicenseSerializer(licen)

            if user:
                ue=user_mail(user.email)
                ue.welcome_email(user.username)
                return Response({"user": serializer.data, "authtoken": AuthToken.objects.create(user)[1], "license": licenSerializer.data},
                                status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class userExist(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        email = None
        username = None
        user = None
        if "email" in request.query_params.keys():
            email = request.query_params['email']
            user = get_object_or_404(User.objects.all(), email=email)
            return (Response(status=status.HTTP_200_OK, data={"detail": "found"}))
        elif "username" in request.query_params.keys():
            username = request.query_params["username"]
            user = get_object_or_404(User.objects.all(), username=username)
            return (Response(status=status.HTTP_200_OK, data={"detail": "found"}))
        else:
            return Response(data={"details": "invalid param"}, status=status.HTTP_400_BAD_REQUEST)



class loginView(APIView):
    authentication_classes = [BasicAuthentication]

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request):
        try:
            if not request.user.is_authenticated:
                user = authenticate(username=request.data['email'], password=request.data['password'])
                
                if user is not None and user.verified:
                    # login(request,user)
                    licenseUtil=LicenseUtil(userId=user)
                    return Response(data={"user": UserSerializer(instance=user).data, "authtoken": AuthToken.objects.create(user)[1], "license": licenseUtil.getLicenseJo()})
                elif user is not None and not user.verified:
                    sendConfirm(user)
                    return Response(data={"detail": "user not verified, new email send please verify the user"}, status=status.HTTP_401_UNAUTHORIZED)
                else:
                    return Response(data={"detail": "invalid email/password"}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response(data={"detail": request.user.username + " already logged in"},
                                status=status.HTTP_401_UNAUTHORIZED)

        except KeyError:
            return Response(data={"detail": "invalid inputdata"}, status=status.HTTP_400_BAD_REQUEST)


class accountsView(APIView):
    def delete(self, request, format='json'):
        if request.user.is_authenticated:
            queryset = User.objects.all()
            queryset = get_object_or_404(queryset, pk=request.user.id)
            queryset.delete()
            return Response(data={"detail": "user deleted"}, status=status.HTTP_200_OK)

    def get(self, request):
        if request.user.is_authenticated:
            queryset = User.objects.all()
            user = get_object_or_404(queryset, pk=request.user.id)
            US = UserSerializer(user)
            licenseUtil = LicenseUtil(userId=user)
            return Response(data={"user":US.data,"license":licenseUtil.getLicenseJo()})
        else:
            return Response(data={"detail": "Unauthorized Access"}, status=status.HTTP_401_UNAUTHORIZED)

    def patch(self, request):
        if request.user.is_authenticated:
            queryset=User.objects.all()
            queryset=get_object_or_404(queryset,pk=request.user.id)
            user_serializer=UserUpdateSerializer(queryset,data=request.data)
            if user_serializer.is_valid(raise_exception=True):
                user_serializer.save()
                return Response(data=user_serializer.data)




class accountsImageView(APIView):
    def get(self, request):
        if (request.user.is_authenticated):
            queryset = User.objects.all()
            queryset = get_object_or_404(queryset, pk=request.user.id)
            if not queryset.user_image == None:
                userimage = queryset.user_image
                return HttpResponse(content=userimage, content_type='image/*')
            else:
                return Response(data={"detail": "no image"})
        else:
            return Response({"detail": "not authenticated"})

    def post(self, request):
        if (request.user.is_authenticated and 'file' in request.data.keys()):
            queryset = User.objects.all()
            queryset = get_object_or_404(queryset, pk=request.user.id)
            queryset.user_image = File(request.data['file'])
            queryset.user_image.name = str(queryset.id) + '.' + queryset.user_image.name.split('.')[1]
            queryset.save()
            print(queryset.user_image)
            return Response(data={"detail": "image added"})
        else:
            return Response({"detail": "not authenticated"})
