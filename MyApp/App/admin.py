from django.contrib import admin
from .models import Todo


class ToDoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'date', 'done')   # Какие поля будем видеть в списке
    list_display_links = ('id', 'title')    
    search_fields = ('id', 'title')    # По каким полям будет поиск
    list_editable = ('done',)
    list_filter = ('done',)    # По каким полям фильтровать


admin.site.register(Todo, ToDoAdmin)

