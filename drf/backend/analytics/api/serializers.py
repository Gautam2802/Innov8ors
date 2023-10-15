from rest_framework import serializers   #rest_framework

from .models import *

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'





class ExcelFileSerializer(serializers.Serializer):
    file = serializers.FileField()


