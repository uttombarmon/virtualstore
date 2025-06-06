import Categorie from "./Categorie";
export interface CategoryItem {
  image: string;
  name: string;
}
function Categories() {
  // https://i.postimg.cc/L6yxC40C/book.jpg
  // https://i.postimg.cc/3xdnPMsK/fashion.jpg
  // https://i.postimg.cc/FKSGHyF8/sneakers.jpg
  // https://i.postimg.cc/hjbr9Kd0/spacejoy-Rq-O6kwm4t-ZY-unsplash.jpg
  // https://i.postimg.cc/52TnJ7J8/tech.jpg
  const data: CategoryItem[] = [
    { image: "https://i.postimg.cc/3xdnPMsK/fashion.jpg", name: "Fashions" },
    { image: "https://i.postimg.cc/52TnJ7J8/tech.jpg", name: "Techs" },
    {
      image:
        "https://i.postimg.cc/hjbr9Kd0/spacejoy-Rq-O6kwm4t-ZY-unsplash.jpg",
      name: "Furnitures",
    },
    { image: "https://i.postimg.cc/L6yxC40C/book.jpg", name: "Books" },
    { image: "https://i.postimg.cc/FKSGHyF8/sneakers.jpg", name: "Sneakers" },
  ];
  return (
    <div className=" bg-slate-400/20 py-3">
      <p className=" text-3xl font-bold ml-10 my-4">Shop Our Top Categories</p>
      <div className=" w-full flex justify-evenly py-2">
        {data.map((e: CategoryItem) => (
          <Categorie key={e.name} data={e} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
