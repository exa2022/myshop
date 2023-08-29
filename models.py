from django.db import models


# Create your models here.

class profile(models.Model):
    email = models.EmailField(max_length = 100)
    full_name = models.TextField(max_length = 50)
    password = models.CharField(max_length = 10, default=None)
