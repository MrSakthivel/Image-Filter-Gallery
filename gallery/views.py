from django.shortcuts import render, redirect
from .models import ImageItem
from .forms import ImageForm

def index(request):
    images = ImageItem.objects.all()

    categories = ImageItem.objects.values_list('category', flat=True).distinct()

    return render(request, "index.html", {
        "images": images,
        "categories": categories
    })


def upload_page(request):
    if request.method == "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("/")
    else:
        form = ImageForm()

    return render(request, "upload.html", {"form": form})
