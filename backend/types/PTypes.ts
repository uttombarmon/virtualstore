export default interface PTypes {
  _id?: string;
  productName: string;
  productDescription: string;
  store: string;
  price: number;
  images: string[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
