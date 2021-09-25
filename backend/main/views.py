from django.db.models.query import QuerySet
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import BackImage, UserImage, CustomUser
from .serializers import BackImageSerializer, UserImageSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from .image_converter import ImageConverter
# from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class BackImageSet(viewsets.ModelViewSet):
    queryset=BackImage.objects.all()
    serializer_class=BackImageSerializer
    authentication_classes = [SessionAuthentication]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        back_imgs = BackImage.objects.all().last()
        back_imgs.user = request.user
        back_imgs.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset = queryset.filter(user=request.user)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data[-1])

class UserImageSet(viewsets.ModelViewSet):
    queryset=UserImage.objects.all()
    serializer_class=UserImageSerializer
    # authentication_classes = [JWTAuthentication, SessionAuthentication]
    authentication_classes = [SessionAuthentication]


    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        back_img = BackImage.objects.filter(user = request.user).first()
        back_img.image = ImageConverter.convert(back_img.image.encode(), serializer.data['user_image'].encode(), request.user.image_count)
        back_img.save()
        
        user = CustomUser.objects.filter(id = request.user.id).first()
        user.up_count()

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
 