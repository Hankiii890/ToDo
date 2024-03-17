from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.title 
    
    