export default interface PTypes {
  _id?: { $oid: string } | string;
  product_id: string;
  parent_category: string;
  category: string;
  sub_categories?: string[];
  name: string;
  description: string;
  price: number;
  currency: string;
  stock_quantity: number;
  images: Array<{ url: string; alt: string }>;
  specifications: {
    display: string;
    processor: string;
    storage: string[];
    camera: string;
    os: string;
  };
  brand: string;
  color: string[];
  variants: Array<{
    storage: string;
    price: number;
  }>;
  reviews: Array<{}>;
  related_products: string[];
  createdAt?: Date;
  updatedAt?: Date;
  sold_quantity?: number;
}
