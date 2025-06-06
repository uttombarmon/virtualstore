import Banner from "@/components/home/Banner/Banner";
import BestProducts from "@/components/home/BestSelling/BestProducts";
import Categories from "@/components/home/Categories/Categories";

export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <Categories />
      </div>
      <BestProducts />
      <div className=" h-screen"></div>
    </div>
  );
}
