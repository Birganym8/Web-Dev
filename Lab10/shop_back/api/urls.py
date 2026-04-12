from api import views

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_old import CategoryViewSet, ProductViewSet


router = DefaultRouter()

router.register(r'categories', CategoryViewSet)

router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls)),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view()),
]



