from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Any extra fields would go here
    def __str__(self):
        return self.email

class BackImage(models.Model):
    image=models.TextField()
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE)

class UserImage(models.Model):
    user_image=models.TextField()
    owner=models.ForeignKey(CustomUser,on_delete=models.CASCADE)