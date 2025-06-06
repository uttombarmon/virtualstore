export interface ProductCardI {
  product_id: string;
  name: string;
  price: number;
  reviews?: {
    user: string;
    rating: number;
    comment: string;
  }[];
  currency: string;
}
