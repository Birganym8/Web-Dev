export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;        
  link: string;     
  imageUrl: string; 
  categoryId: number;   
  isFavorite: boolean;
}