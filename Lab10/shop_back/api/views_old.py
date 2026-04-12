from rest_framework import viewsets, filters
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
    
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name'] 
    ordering_fields = ['name', 'price'] 
    ordering = ['name'] 

    def get_queryset(self):
        
        queryset = Product.objects.all()
        
       
        category_id = self.request.query_params.get('category')
        if category_id:
            queryset = queryset.filter(category_id=category_id)
            
        
        is_active = self.request.query_params.get('is_active')
        if is_active:
            val = is_active.lower() == 'true'
            queryset = queryset.filter(is_active=val)
            
        return queryset
    

    @action(detail=False, methods=['get'])
    def active(self, request):
    
        active_products = Product.objects.filter(is_active=True)
        
        filtered_queryset = self.filter_queryset(active_products)
        
        serializer = self.get_serializer(filtered_queryset, many=True)
        return Response(serializer.data)