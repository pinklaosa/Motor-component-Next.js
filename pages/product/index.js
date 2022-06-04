import ProductList from "../../components/productlist";
import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Axios from "axios";

let categoryList = ["All", "Battery", "Oil", "Tire"];

const Product = () => {
  const [categorySelected, setCategorySelected] = useState("All");
  const [products, setProducts] = useState([]);
  // const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/product").then((res) => {
      if (res.data.status === 200) {
        setProducts(res.data.result);
      }
    });
  }, []);


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
