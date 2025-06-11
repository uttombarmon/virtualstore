"use client";
import { ProductCardI } from "@/types/ProductCard";
import { CardActionArea } from "@mui/material";
// import Image from "next/image";

// function ProductCard({ product }: { product: ProductCardI }) {
//   const { product_id, name, price, currency, images } = product;
//   return (
//     <div>
//       <p>{product_id}</p>
//       <p>{name}</p>
//       <p>{price}</p>
//       <p>{currency}</p>
//       <Image
//         src={images[0].url}
//         alt={images[0].alt}
//         width={400}
//         height={400}
//       ></Image>
//     </div>
//   );
// }

// export default ProductCard;

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }: { product: ProductCardI }) {
  const { product_id, name, price, currency, images, brand } = product;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          className=" w-20 h-40"
          // height="100px"
          // width={100}
          image={images[0].url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.slice(0, 20)}..
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {brand}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Product Code:{product_id}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price}
            {currency}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">
            Details
          </Button>
          <Button size="small" variant="outlined">
            Buy Now
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
