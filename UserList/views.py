from django.shortcuts import render
from django.views import View
# Create your views here.
from .services import get_users

#from django.views.generic import TemplateView


def listUser(request):
    # declare une varibale qui contient la fonction de mon service
    customers = get_users()
    return render(request, "index.html", {'customers': customers})
