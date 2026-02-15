import {Product} from '../../models/product.model';
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products: Product[] = [
  {
    id: 200000001,
    name: 'Наушники Sony WH-1000XM5 черный',
    description: 'Беспроводные наушники Sony WH-1000XM5 с активным шумоподавлением. Обеспечивают до 30 часов воспроизведения и быструю зарядку. Идеальны для работы и путешествий.',
    price: 89990,
    rating: 4.9,
    image: 'assets/images/sony_wh1000xm5.jpg',
    images: [
      'assets/images/sony_wh1000xm5.jpg',
      'assets/images/sony_wh1000xm5_1.jpg',
      'assets/images/sony_wh1000xm5_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-200000001/'
  },
  {
    id: 200000002,
    name: 'Планшет Apple iPad Air 5 64GB серебристый',
    description: 'Apple iPad Air 5 с дисплеем 10.9" и процессором M1. Отлично подходит для учебы, работы и творчества.',
    price: 239990,
    rating: 5,
    image: 'assets/images/ipad_air5.jpg',
    images: [
      'assets/images/ipad_air5.jpg',
      'assets/images/ipad_air5_1.jpg',
      'assets/images/ipad_air5_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-5-64gb-serebristyi-200000002/'
  },
  {
    id: 200000003,
    name: 'Игровая консоль PlayStation 5 825GB',
    description: 'PlayStation 5 — мощная консоль нового поколения с поддержкой 4K и эксклюзивными играми.',
    price: 359990,
    rating: 4.8,
    image: 'assets/images/ps5.jpg',
    images: [
      'assets/images/ps5.jpg',
      'assets/images/ps5_1.jpg',
      'assets/images/ps5_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/playstation-5-825gb-200000003/'
  },
  {
    id: 200000004,
    name: 'Монитор LG UltraGear 27" 144Hz',
    description: 'Игровой монитор LG UltraGear 27" с разрешением 2560x1440 и частотой обновления 144Hz.',
    price: 89990,
    rating: 4.7,
    image: 'assets/images/lg_ultragear.jpg',
    images: [
      'assets/images/lg_ultragear.jpg',
      'assets/images/lg_ultragear_1.jpg',
      'assets/images/lg_ultragear_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lg-ultragear-27-144hz-200000004/'
  },
  {
    id: 200000005,
    name: 'Смарт-часы Samsung Galaxy Watch 6',
    description: 'Samsung Galaxy Watch 6 с пульсомером, GPS и водонепроницаемостью. Отлично подходит для активного образа жизни.',
    price: 65990,
    rating: 4.6,
    image: 'assets/images/galaxy_watch6.jpg',
    images: [
      'assets/images/galaxy_watch6.jpg',
      'assets/images/galaxy_watch6_1.jpg',
      'assets/images/galaxy_watch6_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-200000005/'
  },
  {
    id: 200000006,
    name: 'Внешний SSD Samsung T7 1TB',
    description: 'Компактный внешний SSD Samsung T7 на 1 ТБ с высокой скоростью чтения. Идеален для фото, видео и игр.',
    price: 48990,
    rating: 4.8,
    image: 'assets/images/samsung_t7.jpg',
    images: [
      'assets/images/samsung_t7.jpg',
      'assets/images/samsung_t7_1.jpg',
      'assets/images/samsung_t7_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-t7-1tb-200000006/'
  },
  {
    id: 200000007,
    name: 'Фотоаппарат Canon EOS R10',
    description: 'Беззеркальный фотоаппарат Canon EOS R10 с 24.2 МП, поддержкой 4K видео и быстрым автофокусом.',
    price: 179990,
    rating: 4.7,
    image: 'assets/images/canon_eos_r10.jpg',
    images: [
      'assets/images/canon_eos_r10.jpg',
      'assets/images/canon_eos_r10_1.jpg',
      'assets/images/canon_eos_r10_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/canon-eos-r10-200000007/'
  },
  {
    id: 200000008,
    name: 'Робот-пылесос Xiaomi Vacuum S11',
    description: 'Робот-пылесос Xiaomi Vacuum S11 с мощным всасыванием и картографированием помещения.',
    price: 89990,
    rating: 4.5,
    image: 'assets/images/xiaomi_vacuum_s11.jpg',
    images: [
      'assets/images/xiaomi_vacuum_s11.jpg',
      'assets/images/xiaomi_vacuum_s11_1.jpg',
      'assets/images/xiaomi_vacuum_s11_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-vacuum-s11-200000008/'
  },
  {
    id: 200000009,
    name: 'Клавиатура Razer BlackWidow V3',
    description: 'Механическая игровая клавиатура Razer BlackWidow V3 с RGB подсветкой и полной программируемостью.',
    price: 28990,
    rating: 4.8,
    image: 'assets/images/razer_blackwidow.jpg',
    images: [
      'assets/images/razer_blackwidow.jpg',
      'assets/images/razer_blackwidow_1.jpg',
      'assets/images/razer_blackwidow_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/razer-blackwidow-v3-200000009/'
  },
  {
    id: 200000010,
    name: 'Проектор Epson EH-TW740',
    description: 'Домашний проектор Epson EH-TW740 с Full HD разрешением и поддержкой 3LCD технологии.',
    price: 149990,
    rating: 4.6,
    image: 'assets/images/epson_tw740.jpg',
    images: [
      'assets/images/epson_tw740.jpg',
      'assets/images/epson_tw740_1.jpg',
      'assets/images/epson_tw740_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/epson-eh-tw740-200000010/'
  }
];



  
}