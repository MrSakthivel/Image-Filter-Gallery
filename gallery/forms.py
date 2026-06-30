from django import forms
from .models import ImageItem

class ImageForm(forms.ModelForm):
    class Meta:
        model = ImageItem
        fields = ['category', 'image']
