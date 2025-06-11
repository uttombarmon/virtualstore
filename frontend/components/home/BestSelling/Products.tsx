"use client";
import { ProductCardI } from "@/types/ProductCard";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState<ProductCardI[]>([]);
  // const datas = await fetch("/public/bestselling.json");
  useEffect(() => {
    async function fetchdata(): Promise<void> {
      const datas = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/home/bestselling`
      );
      console.log(datas);
      const products = await datas.json();
      setProducts(products);
    }
    fetchdata();
  }, []);

  console.log(products);
  return (
    <div className=" flex gap-4 pt-4 w-full justify-around">
      {products.map((d: ProductCardI) => (
        <ProductCard key={d.product_id} product={d} />
      ))}
    </div>
  );
}

export default Products;
