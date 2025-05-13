import Link from "next/link";

function MenuLink() {
  return (
    <ul>
      <Link
        href={"/"}
        className=" px-4 py-2 hover:underline hover:text-blue-700"
      >
        All Categories
      </Link>
      <Link href={"/"} className=" px-4 py-2 ">
        Electronics & Gadgets
      </Link>
      <Link href={"/"} className=" px-4 py-2 ">
        Fashion & Apparel
      </Link>
      <Link href={"/"} className=" px-4 py-2 ">
        Home & Living
      </Link>
    </ul>
  );
}

export default MenuLink;
