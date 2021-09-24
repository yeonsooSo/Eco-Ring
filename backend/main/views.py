from django.db.models.query import QuerySet
from django.shortcuts import render
from .models import BackImage, UserImage
from .serializers import BackImageSerializer, UserImageSerializer
from rest_framework import viewsets
# Create your views here.

class BackImageSet(viewsets.ModelViewSet):
    queryset=BackImage.objects.all()
    serializer_class=BackImageSerializer

class UserImageSet(viewsets.ModelViewSet):
    queryset=UserImage.objects.all()
    serializer_class=UserImageSerializer