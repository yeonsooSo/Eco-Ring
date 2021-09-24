from django.contrib.auth.models import User
from .models import BackImage, CustomUser, UserImage
from rest_framework import serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'last_login', 'date_joined', 'is_staff')

class BackImageSerializer(serializers.ModelSerializer):
    user=serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = BackImage
        fields=['image', 'user']

class UserImageSerializer(serializers.ModelSerializer):
    owner=serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = UserImage
        fields=['owner','user_image']