import { ProductCardI } from "@/types/ProductCard";

async function Products() {
  const datas = await fetch("/public/bestselling.json");
  const products = await datas.json();
  return (
    <div>
      {products.map((d: ProductCardI) => (
        <ProductCard key={d.product_id} />
      ))}
    </div>
  );
}

export default Products;
