# Generated by Django 3.2.7 on 2021-09-24 20:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_merge_0003_customuser_image_count_0003_userimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userimage',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]