import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];
  favorites: Product[] = [];
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts(); // получаем все продукты
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts = this.allProducts.filter(p => p.categoryId === id);
  }

  toggleFavorite(productId: number) {
    const product = this.allProducts.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;
    this.favorites = this.allProducts.filter(p => p.isFavorite);
  }

  removeFromFavorites(productId: number) {
    const product = this.allProducts.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = false;
    this.favorites = this.allProducts.filter(p => p.isFavorite);
  }

  removeProduct(productId: number) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
  
    this.favorites = this.allProducts.filter(p => p.isFavorite);
  }
}