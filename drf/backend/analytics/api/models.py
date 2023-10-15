from django.db import models

# Create your models here.

from django.db import models


class Employees(models.Model):
    job_title = models.CharField(max_length=100)
    employer = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=1000, decimal_places=2)
    salary_type = models.CharField(max_length=100)


    




