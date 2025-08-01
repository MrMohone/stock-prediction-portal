from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class RegisterView(generics.CreateAPIView):#to create objects in db
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] #This registration view can be access by anyone
    
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated] #This registration view can be access by only 

    def get(self, request):#get request
        #just for testing
        response = {
            'status' : 'Request was Permited'
        }
        return Response(response)



