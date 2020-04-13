from .models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField( required=True,validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(min_length=4)
    password = serializers.CharField(min_length=8,write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(email=validated_data['email'], password=validated_data['password'],username=validated_data['username'])
        return user

    def update(self, instance, validated_data):
        pass

    class Meta:
        model = User
        fields = ( 'username', 'email', 'password')

class UserUpdateSerializer(serializers.ModelSerializer):
    username=serializers.CharField(min_length=4,required=False)
    email=serializers.EmailField(min_length=8,required=False)
    class Meta:
        model=User
        fields=('username','email')


