from .models import Todo
from rest_framework import viewsets, permissions
from .serializers import TodoSerializer


class TodoViewsSet(
    viewsets.ModelViewSet):  # Класс предоставляет стандартные методы для представления модели Todo в виде веб-API.
    queryset = Todo.objects.all
    serializer_class = TodoSerializer
    permission_classes = [
        permissions.AllowAny
    ]  # Доступ к методам представления разрешён всем пользователям


