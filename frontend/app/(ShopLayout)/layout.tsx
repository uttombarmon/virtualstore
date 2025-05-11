// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "VirtualStore",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/favicon.ico",
//   },
//   openGraph: {
//     title: "VirtualStore",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "VirtualStore",
//     description:
//       " Discover a wide range of products online at Virtual Store, your trusted e-commerce destination in Bangladesh. Enjoy convenient shopping and secure delivery right to your doorstep in Dinajpur and across the nation.",
//     images: "/images/og-image.png",
//   },
//   keywords: [
//     "Virtual store",
//     "virtual",
//     "store",
//     "virtualstore",
//     "e-commerce",
//     "price",
//   ],
//   description:
//     "Discover a wide range of products online at Virtual Store, your trusted e-commerce destination in Bangladesh. Enjoy convenient shopping and secure delivery right to your doorstep in Dinajpur and across the nation.",

import Navbar from "@/components/shared/Navbar";
import ShortNavbar from "@/components/shared/ShortNavbar.tsx/ShortNavbar";

// };
export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className=" flex flex-wrap flex-col justify-center items-center">
        <ShortNavbar />
        <Navbar />
      </div>
      {children}
    </div>
  );
}
