import { Card, CardMedia } from "@mui/material";
import { CategoryItem } from "./Categories";

function Categorie({ data }: { data: CategoryItem }) {
  return (
    <Card className=" text-center relative w-1/6 h-52">
      <p className=" absolute z-10 mx-auto text-3xl font-bold text-slate-200 ml-4 mt-3">
        {data?.name}
      </p>
      <CardMedia
        className=" h-full bg-cover brightness-75"
        component="img"
        height="194"
        image={data?.image}
        alt="Paella dish"
      />
    </Card>
  );
}

export default Categorie;
