from django.shortcuts import render
from django.http import JsonResponse
import statistics
from .models import *
import io
from django.http import HttpResponse
from django.views import View
import os
from .forms import ExcelFileUploadForm
from django.http import JsonResponse
from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework.parsers import MultiPartParser, FormParser
from io import BytesIO
from django.db.models import Avg
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import *
from rest_framework import status
from rest_framework import generics

from django.db.models import Count
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
import traceback
import openpyxl

# class ShowUploadedData(APIView):
#     def get(self, request, format=None):
#         # Query the database to retrieve a queryset of all uploaded data
#         data = Employer.objects.all()
#         serializer = EmployerSerializer(data, many=True)  # Use many=True to serialize a queryset
#         return Response(serializer.data)
    

class ExcelUploadView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request, format=None):
       

        try:
            # Create a file-like object from the uploaded content
            print(request.FILES)
            excel_file = request.FILES.get('excel_file')

            # Open and read the uploaded Excel file
            workbook = openpyxl.load_workbook(excel_file)
            sheet = workbook.active

            # Ingest data into the database
            for row in sheet.iter_rows(min_row=2, values_only=True):

                country = row[12]
                job_title = row[19]
                employer = row[7]
                salary = row[25]
                salary_type = row[26]
                visa_status = row[4]



                if (visa_status == "H-1B"):
                    employee_data = {
                        "job_title": job_title,
                        "employer": employer,
                        "country": country,
                        "salary": salary,
                        "salary_type": salary_type,
                    }
            
                    employeeserializer = EmployeeSerializer(data=employee_data)
                    if employeeserializer.is_valid():
                        employeeserializer.save()

                else: 
                    pass

            return Response({'message': 'Data has been ingested into the database'})
        except Exception as e:
            
            traceback.print_exc()  # Print the traceback to the console
            return Response({'error': str(e)}, status=400)




def employee_counts_by_country(request):
    counts = Employees.objects.values('country').annotate(count=Count('id')).order_by('country')

    
    result = {
        'counts': [{'country': item['country'], 'count': item['count']} for item in counts]
    }

    return JsonResponse(result)


def mean_salary_by_type(request):
    salary_types = Employees.objects.values('salary_type').distinct()
    salary_data = []

    for salary_type in salary_types:
        type_name = salary_type['salary_type']
        avg_salary = Employees.objects.filter(salary_type=type_name).aggregate(avg_salary=Avg('salary'))['avg_salary']
        salary_data.append({'salary_type': type_name, 'avg_salary': avg_salary})

    return JsonResponse({'mean_salary_by_type': salary_data})




def median_salary_by_type(request):
    salary_types = Employees.objects.values('salary_type').distinct()
    salary_data = []

    for salary_type in salary_types:
        type_name = salary_type['salary_type']
        salaries = Employees.objects.filter(salary_type=type_name).values_list('salary', flat=True)
        median_salary = statistics.median(salaries)
        salary_data.append({'salary_type': type_name, 'median_salary': median_salary})

    return JsonResponse({'median_salary_by_type': salary_data})


def lowpercentile_salary_by_type(request):
    salary_types = Employees.objects.values('salary_type').distinct()
    salary_data = []

    for salary_type in salary_types:
        type_name = salary_type['salary_type']
        salaries = Employees.objects.filter(salary_type=type_name).values_list('salary', flat=True)
        
        # Calculate the 25th percentile (1st quartile) salary
        percentile_salary = statistics.quantiles(salaries, n=4)[0]

        salary_data.append({'salary_type': type_name, 'percentile_salary': percentile_salary})

    return JsonResponse({'percentile_salary_by_type': salary_data})


def highpercentile_salary_by_type(request):
    salary_types = Employees.objects.values('salary_type').distinct()
    salary_data = []

    for salary_type in salary_types:
        type_name = salary_type['salary_type']
        salaries = Employees.objects.filter(salary_type=type_name).values_list('salary', flat=True)
        
        # Calculate the 75th percentile (3rd quartile) salary
        percentile_salary = statistics.quantiles(salaries, n=4)[2]

        salary_data.append({'salary_type': type_name, 'percentile_salary': percentile_salary})

    return JsonResponse({'percentile_salary_by_type': salary_data})