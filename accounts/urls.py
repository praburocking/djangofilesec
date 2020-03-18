from django.urls import path
from .views import createUser,loginView,accountsView,userExist
from knox import views as knox_views

urlpatterns=[
    path(r'signup',createUser.as_view()),
    path(r'login',loginView.as_view()),
    path(r'logout',knox_views.LogoutView.as_view()),
    path(r'accounts',accountsView.as_view()),
    path(r'signup/exist',userExist.as_view()),
]