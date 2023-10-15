from django.urls import path
from . import views

urlpatterns = [
    path('', views.employee_counts_by_country),
    path('mean/', views.mean_salary_by_type),
    path('median/', views.median_salary_by_type),
    path('low-percentile/', views.lowpercentile_salary_by_type),
    path('high-percentile/', views.highpercentile_salary_by_type),
    path('upload/', views.ExcelUploadView.as_view()),
    
]