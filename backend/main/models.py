from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Any extra fields would go here
    image_count = models.IntegerField(default=0)

    def __str__(self):
        return self.email

    def up_count(self):
        self.image_count += 1
        self.save()

class BackImage(models.Model):
    image=models.TextField()
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE, null=True)

class UserImage(models.Model):
    user_image=models.TextField()
    owner=models.ForeignKey(CustomUser,on_delete=models.CASCADE, null=True)