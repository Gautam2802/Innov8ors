# BACKEND

# start backend server by going into drf->(activate venv)->backend->analytics and run python manage.py runserver

# Backend consists of Employee model which has 5 attr (job_title, salary, country, employer, salary_type)

# 1 No of employees are filtered according to the country they are employed in

# 2  Mean, Median, 25 percentile and 75 percentile salaries are filtered on the basis of salary type(week, hour, yearly, bi-weekly)

# 3 there is a different route for uploading excel file through postman or thunder client

# ROUTES(BACKEND)
no of applicants = "http://127.0.0.1:8000/api/"
mean = "http://127.0.0.1:8000/api/mean/"
median = "http://127.0.0.1:8000/api/median/"
25 percentile = "http://127.0.0.1:8000/api/low-percentile/"
75 percentile = "http://127.0.0.1:8000/api/high-percentile"
excel upload file(USE POSTMAN) = "http://127.0.0.1:8000/api/upload/"
# please remember to delete previous data by going into drf->(activate venv)->backend->analytics and run python manage.py flush

# There are different view sets for analysing the data. The data is read through exceluploadview and used to cread employee models using ORM queries and the database is connected to postgresql where all the tables are formed


# FRONTEND

# start frontend server by going into drf->Frontend->my_app and run command npm run dev

# ROUTES

landing page = "http://127.0.0.1:3000/"

no of applicants = "http://127.0.0.1:3000/1query/"
mean = "http://127.0.0.1:3000/2query/"
median = "http://127.0.0.1:3000/3query/"
25 percentile = "http://127.0.0.1:3000/4query/"
75 percentile = "http://127.0.0.1:3000/5query/"





