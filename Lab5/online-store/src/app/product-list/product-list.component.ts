import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() isFavoritesList: boolean = false; 
  @Output() delete = new EventEmitter<number>();
  @Output() toggleFavourite = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onToggleFavourite(id: number) {
    this.toggleFavourite.emit(id);
  }
}