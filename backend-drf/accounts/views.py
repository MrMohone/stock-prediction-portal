from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

class RegisterView(generics.CreateAPIView):#to create objects in db
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] #This registration view can be access by anyone
    
    



