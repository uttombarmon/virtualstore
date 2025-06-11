import { Request, Response, Router } from "express";
import apiProtect from "../../middleware/apiProtected";
import { ProductS } from "../../models/Product";
import PTypes from "../../types/PTypes";

const routerProduct = Router();
// product add api
routerProduct.post("/", async (req: Request, res: Response) => {
  const productData: PTypes = req.body;
  if (!productData) {
    res.status(204).json({ error: "Data's missing" });
  }
  try {
    const result = await ProductS.create(productData);
    console.log(result);
    res.status(200).json({ data: "Product successfully added!" });
  } catch (error) {
    console.log("Product Insert:", error);
    res.status(500).json({ error: error });
  }
});

//a product get api
routerProduct.get("/", async (req: Request, res: Response) => {
  try {
    const product: PTypes[] | null = await ProductS.find();
    if (!product || product === null) {
      res.status(203).json({ error: "Not Found Data!" });
    }
    res.status(200).json({ product: product });
  } catch (error) {
    console.log("product get api:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

//a product get api
routerProduct.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product: PTypes | null = await ProductS.findById(id);
    if (!product || product === null) {
      res.status(203).json({ error: "Not Found Data!" });
    }
    res.status(200).json({ product: product });
  } catch (error) {
    console.log("product get api:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
  res.status(200).json({ id: id });
});

// product edit api
routerProduct.patch(
  "/edit",
  apiProtect,
  async (req: Request, res: Response) => {
    const { id, data } = req.body;
    if (!data) {
      res.status(301).json({ error: "Data not changes" });
    }
    try {
      const result = await ProductS.findById(id).updateOne(data);
      if (!result.acknowledged && result.modifiedCount! > 0) {
        res.status(304).json({ error: "Update failed!" });
      }
      res.status(204).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error!" });
    }
  }
);

export default routerProduct;
