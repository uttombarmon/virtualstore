import CusButton from "./Button";
import Products from "./Products";

function BestProducts() {
  return (
    <div className=" py-4">
      <div className=" flex w-full justify-between px-8">
        <p className=" text-3xl font-bold">Best Selling Products..</p>
        <CusButton />
      </div>
      <Products />
    </div>
  );
}

export default BestProducts;
