from django.shortcuts import render

from .serializers import ProductSerializer
from .models import Product

from rest_framework.views import APIView
from rest_framework.response import Response

class LatestProductsList(APIView):
    def get(self, request, format=None):
        product = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
