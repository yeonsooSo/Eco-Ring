from django.urls import include, path
from .views import BackImageSet
from . import views
from rest_framework.routers import DefaultRouter

image_list=BackImageSet.as_view({
    'get':'list',
    'post':'create'
})

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    path('image/',image_list),
]