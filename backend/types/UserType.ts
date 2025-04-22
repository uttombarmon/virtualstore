export default interface UserType {
  _id?: string;
  username: string;
  email: string;
  password: string;
  orders: string[];
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
  isVerified: boolean;
}
