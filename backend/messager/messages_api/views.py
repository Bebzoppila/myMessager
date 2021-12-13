from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from messages_api.models import Message
from messages_api.serializers import MessageSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import BasePermission
from django.contrib.auth.models import User
class MessagesPermission(BasePermission):
    
    def has_permission(self, request, view):
        return bool(request.user.pk == int(request.query_params['id_sender']))

class TestView(APIView):
    permission_classes = (MessagesPermission, IsAuthenticated, )

    def get(self, request):
        #  id_sender, id_recipient
        params = request.query_params
        all_messages = Message.objects.filter(id_sender = params['id_sender'], 
                                            id_recipient = params['id_recipient'])
        print(request)
        return Response(MessageSerializer(all_messages,  many=True).data)


class AllUsers(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        all_users = User.objects.all()
        all_users = UserSerializer(all_users, many=True).data
        return Response(all_users)