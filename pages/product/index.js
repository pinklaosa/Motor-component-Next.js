import ProductList from "../../components/productlist";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
let categoryList = ["All", "Battery", "Oil", "Rubbon"];

const Product = () => {
  const [categorySelected, setCategorySelected] = useState();

  return (

    <>

      <Head>
        <title>Product</title>
      </Head>
            <Navbar />
      <div
        className=" py-32 flex flex-col m-auto items-center rounded-b-3xl shadow-md 
      bg-hero-pattern bg-cover bg-center "
      >
        <h2 className="text-4xl text-white font-bold"> ProductList </h2>
      </div>
      <div className="container mx-auto">
        <div class="grid grid-flow-col gap-7 items-center text-center -mt-14">
          {categoryList.map((c, i) => (
            <div
              href="#"
              className="bg-white w-full p-24 border-2 rounded-lg border-gray-200 
                shadow-md text-2xl font-semibold hover:ring-2 hover:ring-slate-700
                cursor-pointer"
              key={i}
              onClick={() => setCategorySelected(c)}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
      <ProductList products={products} category={categorySelected} />
    </>
  );
};
export default Product;
