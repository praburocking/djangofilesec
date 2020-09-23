from django.urls import path
from .views import filesListCreateView,filesRetriveDestroyView,filesDownload,filesDownloadHistory
urlpatterns=[
    path(r'files',filesListCreateView.as_view()),
    path('files/download/<str:pk>',filesDownload.as_view()),
    path('files/<str:pk>', filesRetriveDestroyView.as_view()),
    path('files/<str:fileId>/downloadhistory',filesDownloadHistory.as_view())

]