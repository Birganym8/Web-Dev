// product-list.component.ts
import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}