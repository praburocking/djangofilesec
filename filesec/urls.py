"""filesec URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from . import views
import logging
def trigger_error(request):
    logger=logging.getLogger(__name__)
    #logging.basicConfig(filename='logs/app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
    logging.error("error er")
    logger.error("we are testing")

urlpatterns = [
    path('grappelli/', include('grappelli.urls')), # grappelli URLS
    path(r'admin/', admin.site.urls),
    
    path('api/v1/', include('api.urls')),
    path('admin/log_viewer/', include('log_viewer.urls')),
    path('sentry-debug/', trigger_error),
    url(r'^(?!api)', views.index,name="index"),
   

]
