from django.db import models

class ImageItem(models.Model):
    category = models.CharField(max_length=50)
    image = models.ImageField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.category
