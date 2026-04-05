from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object() 
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


    def get_queryset(self):
        queryset = Product.objects.all()
        
        
        category_id = self.request.query_params.get('category')
        active = self.request.query_params.get('active')
        search = self.request.query_params.get('search')

        if category_id:
            queryset = queryset.filter(category_id=category_id)
        if active:
            is_active = active.lower() == 'true'
            queryset = queryset.filter(is_active=is_active)
        if search:
            queryset = queryset.filter(name__icontains=search)
            
        return queryset