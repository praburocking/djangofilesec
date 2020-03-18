# api/urls.py
from django.urls import include, path

urlpatterns = [
    path('iam/',include('accounts.urls')),
    path ('app/',include('files.urls'))

]