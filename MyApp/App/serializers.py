from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.HyperlinkedIdentityField):    # Сереализируем данные в формат json
    class Meta:
        model = Todo
        fields = '__all__'   # Все поля модели должны быть переадресованны
