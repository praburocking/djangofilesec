from django.urls import path
from .views import filesListCreateView,filesRetriveDestroyView,filesDownload
urlpatterns=[
    path(r'files',filesListCreateView.as_view()),
    path('files/download/<str:pk>',filesDownload.as_view()),
    path('files/<str:pk>', filesRetriveDestroyView.as_view())

]