from django.db import models

# Create your models here.

class Task(models.Model):

    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    is_done = models.BooleanField(default=False)


    def __str__(self) -> str:
        resumen = "Tarea: " + self.title + ' || ' + 'Descripcion: ' + self.description
        return resumen
    
    