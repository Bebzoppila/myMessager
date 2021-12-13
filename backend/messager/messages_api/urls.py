from django.urls import path
from messages_api.views import TestView, AllUsers
urlpatterns = [
    path('', TestView.as_view()),
    path('all_users/', AllUsers.as_view())
]
