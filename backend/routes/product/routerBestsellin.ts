import { Request, Response, Router } from "express";
import { ProductS } from "./../../models/Product";
const routerBestSelling = Router();

// export interface Product {
//   product_id: string;
//   name: string;
//   price: number;
//   currency: string;
//   images: Array<{
//     url: string;
//     alt: string;
//   }>;
//   brand: string;
//   sold_quantity: number;
// }
routerBestSelling.get("/bestselling", async (_req: Request, res: Response) => {
  try {
    const data = await ProductS.find(
      {},
      {
        product_id: 1,
        name: 1,
        price: 1,
        currency: 1,
        images: 1,
        brand: 1,
        sold_quantity: 1,
      }
    ).lean();

    const sortedData = data.sort(
      (a, b) => Number(a.sold_quantity ?? 0) - Number(b.sold_quantity ?? 0)
    );
    // console.log(sortedData);
    const finalData = sortedData.slice(0, 4);
    res.status(200).json(finalData);
  } catch (error) {
    res.status(400).json({ data: "Not Found Data!" });
  }
});

export default routerBestSelling;
