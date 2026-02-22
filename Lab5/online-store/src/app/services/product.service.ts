import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

private products: Product[] = [
  
  {
    id: 1,
    name: 'Apple iPhone 15',
    description: 'Latest Apple smartphone',
    price: 479990,
    rating: 4.8,
    likes: 0,
    imageUrl: 'assets/products/Apple-iPhone-15.png',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113608341/',
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    description: 'High-end Samsung smartphone',
    price: 429990,
    rating: 4.7,
    likes: 0,
    imageUrl: 'assets/products/Samsung Galaxy S23.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8-128gb-black-109679274/',
    categoryId: 1
  },
  {
    id: 3,
    name: 'Xiaomi 13 Pro',
    description: 'Flagship Xiaomi smartphone',
    price: 389990,
    rating: 4.6,
    likes: 0,
    imageUrl: 'assets/products/Xiaomi 13 Pro.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-13-pro-12-256gb-black-113449799/',
    categoryId: 1
  },
  {
    id: 4,
    name: 'Google Pixel 8',
    description: 'Latest Google phone',
    price: 379990,
    rating: 4.5,
    likes: 0,
    imageUrl: 'assets/products/Google Pixel 8.jpg',
    link: 'https://kaspi.kz/shop/p/google-pixel-8-128gb-black-117000123/',
    categoryId: 1
  },
  {
    id: 5,
    name: 'OnePlus 12',
    description: 'Fast and smooth OnePlus phone',
    price: 359990,
    rating: 4.4,
    likes: 0,
    imageUrl: 'assets/products/OnePlus 12.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-12-12-256gb-black-115000456/',
    categoryId: 1
  },

  
  {
    id: 6,
    name: 'Apple MacBook Air M2',
    description: 'Lightweight Apple laptop',
    price: 799990,
    rating: 4.9,
    likes: 0,
    imageUrl: 'assets/products/Apple MacBook Air M2.png',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-13-6-512gb-space-gray-112345678/',
    categoryId: 2
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    description: 'Compact high-performance laptop',
    price: 699990,
    rating: 4.8,
    likes: 0,
    imageUrl: 'assets/products/Dell XPS 13.png',
    link: 'https://kaspi.kz/shop/p/dell-xps-13-core-i7-16gb-512gb-silver-110987654/',
    categoryId: 2
  },
  {
    id: 8,
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business laptop with premium build',
    price: 749990,
    rating: 4.7,
    likes: 0,
    imageUrl: 'assets/products/Lenovo ThinkPad X1 Carbon.png',
    link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-8-16gb-1tb-black-114567890/',
    categoryId: 2
  },
  {
    id: 9,
    name: 'HP Spectre x360',
    description: '2-in-1 laptop with touchscreen',
    price: 679990,
    rating: 4.6,
    likes: 0,
    imageUrl: 'assets/products/HP Spectre x360.png',
    link: 'https://kaspi.kz/shop/p/hp-spectre-x360-13-5-i7-16gb-512gb-blue-111234567/',
    categoryId: 2
  },
  {
    id: 10,
    name: 'ASUS ROG Strix G16',
    description: 'Gaming laptop with RTX 4060',
    price: 899990,
    rating: 4.7,
    likes: 0,
    imageUrl: 'assets/products/ASUS ROG Strix G16.png',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-rtx-4060-16gb-1tb-black-116789012/',
    categoryId: 2
  },

  
  {
    id: 11,
    name: 'Sony WH-1000XM5',
    description: 'Top noise-canceling headphones',
    price: 149990,
    rating: 4.9,
    likes: 0,
    imageUrl: 'assets/products/Sony WH-1000XM5.png',
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-bluetooth-headphones-black-112233445/',
    categoryId: 3
  },
  {
    id: 12,
    name: 'Bose QuietComfort 45',
    description: 'Comfortable noise-canceling headphones',
    price: 139990,
    rating: 4.8,
    likes: 0,
    imageUrl: 'assets/products/Bose QuietComfort 45.png',
    link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-headphones-black-113355779/',
    categoryId: 3
  },
  {
    id: 13,
    name: 'Apple AirPods Pro 2',
    description: 'Wireless Apple earbuds',
    price: 89990,
    rating: 4.7,
    likes: 0,
    imageUrl: 'assets/products/Apple AirPods Pro 2.png',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-white-110022334/',
    categoryId: 3
  },
  {
    id: 14,
    name: 'JBL Live 660NC',
    description: 'Wireless headphones with ANC',
    price: 59990,
    rating: 4.5,
    likes: 0,
    imageUrl: 'assets/products/JBL Live 660NC.png',
    link: 'https://kaspi.kz/shop/p/jbl-live-660nc-wireless-headphones-blue-111334455/',
    categoryId: 3
  },
  {
    id: 15,
    name: 'Beats Studio3 Wireless',
    description: 'Premium wireless headphones',
    price: 79990,
    rating: 4.6,
    likes: 0,
    imageUrl: 'assets/products/Beats Studio3 Wireless.png',
    link: 'https://kaspi.kz/shop/p/beats-studio3-wireless-black-113446688/',
    categoryId: 3
  },

  
  {
    id: 16,
    name: 'Apple iPad 10.9 (2024)',
    description: 'Latest Apple tablet',
    price: 349990,
    rating: 4.8,
    likes: 0,
    imageUrl: 'assets/products/Apple iPad 10.9 (2024).png',
    link: 'https://kaspi.kz/shop/p/apple-ipad-109-2024-wifi-64gb-silver-111556677/',
    categoryId: 4
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S9',
    description: 'Flagship Samsung tablet',
    price: 329990,
    rating: 4.7,
    likes: 0,
    imageUrl: 'assets/products/Samsung Galaxy Tab S9.png',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128gb-graphite-112667788/',
    categoryId: 4
  },
  {
    id: 18,
    name: 'Xiaomi Pad 6',
    description: 'High-performance Xiaomi tablet',
    price: 249990,
    rating: 4.5,
    likes: 0,
    imageUrl: 'assets/products/Xiaomi Pad 6.png',
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-128gb-black-110778899/',
    categoryId: 4
  },
  {
    id: 19,
    name: 'Lenovo Tab P11 Plus',
    description: 'Mid-range Lenovo tablet',
    price: 219990,
    rating: 4.4,
    likes: 0,
    imageUrl: 'assets/products/Lenovo Tab P11 Plus.png',
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-128gb-gray-113889900/',
    categoryId: 4
  },
  {
    id: 20,
    name: 'Amazon Fire HD 10 Plus',
    description: 'Affordable 10" tablet',
    price: 159990,
    rating: 4.3,
    likes: 0,
    imageUrl: 'assets/products/Amazon Fire HD 10 Plus.png',
    link: 'https://kaspi.kz/shop/p/amazon-fire-hd-10-plus-32gb-black-112990011/',
    categoryId: 4
  }
];


  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}