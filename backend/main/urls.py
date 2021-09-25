from django.urls import include, path
from .views import BackImageSet, UserImageSet, OriginBackImageSet
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'image',views.BackImageSet)
router.register(r'user_image',views.UserImageSet)
router.register(r'origin_image', views.OriginBackImageSet)

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    path('', include(router.urls)),
]