from django.shortcuts import render
from .models import BackImage
from .serializers import BackImageSerializer
from rest_framework import viewsets
# Create your views here.

class BackImageSet(viewsets.ModelViewSet):
    queryset=BackImage.objects.all()
    serializer_class=BackImageSerializer
