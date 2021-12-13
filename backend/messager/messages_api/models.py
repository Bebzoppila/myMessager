from django.db import models
from django.contrib.auth.models import User

class Message(models.Model):
    id_sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='id_sender')
    id_recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='id_recipient')
    message = models.TextField()

    def __str__(self) -> str:
        return f"{self.id_sender, self.id_recipient, self.message}"