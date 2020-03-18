from django.urls import path
from .views import filesListCreateView,filesRetriveDestroyView
urlpatterns=[
    path(r'files',filesListCreateView.as_view()),
    path('files/<str:pk>', filesRetriveDestroyView.as_view())
]