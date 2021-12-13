from rest_framework import serializers
from django.contrib.auth.models import User
from messages_api.models import Message
class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ('username', 'id')

class MessageSerializer(serializers.ModelSerializer):
    class Meta():
        model = Message
        fields = ('id_sender', 'id_recipient', 'message')

