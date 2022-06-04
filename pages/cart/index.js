import Head from "next/head";
import { FaOpencart } from "react-icons/fa";
import Dropdown from "../../components/dropdown";
import Navbar from "../../components/navbar";
import { useState, useMemo, memo, useEffect } from "react";
import Axios from "axios";

const Cart = () => {
  const [list,setList] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/product").then((res) => {
      if (res.data.status === 200) {
        setProducts(res.data.result);
      }
    });
  }, []);

  let items = "";
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    items = localStorage.getItem("cart")
  } else {
    console.log('You are on the server')
  }

  useEffect(() => {
    let totalPrice = 0;
    let cart = [];
    if (cart && items != "") {
      cart = items.split(" ");
      cart = cart.map((item) => parseInt(item));
    }
    let list = [];
    if (products.length > 0 && cart && cart != "") {
      list = products.filter((element, index) => cart.includes(index));
      list.forEach((l) => (totalPrice = totalPrice + parseInt(l.productPrice)));
    }
    setList(list)
    setTotalPrice(totalPrice);
  }, [products, items]);

  const handleRemove = (id) => {
    let listCart = localStorage.getItem("cart");
    let newList = listCart.replace(id - 1, "");
    localStorage.setItem("cart", newList);
    window.location = '/cart'
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Navbar />
      <div className=" container mx-auto my-20">
        <div className="flex flex-row">
          <div className="flex flex-col w-2/3 px-12 py-5 text-slate-800">
            <div className="flex justify-between ">
              <h2 className="text-3xl font-semibold">SHOPPING CART</h2>
              <h2 className="text-3xl font-semibold">{list.length} ITEMS</h2>
            </div>
            <div className="border-2 mt-8 bg-slate-400"></div>
            {list.length > 0 ? (
              list.map((l, i) => (
                <>
                  <li key={i} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={
                          "../../assets/web/" +
                          l.categoryName +
                          "/" +
                          l.productId +
                          ".png"
                        }
                        alt={l.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a> {l.productName} </a>
                          </h3>
                          <p className="ml-4">{l.productPrice}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{l.color}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          {l.categoryName.toUpperCase()}
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => handleRemove(l.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              ))
            ) : (
              <>
                <div className="flex flex-col m-auto items-center">
                  <div className="text-9xl">
                    <FaOpencart />
                  </div>
                  <h1 className="text-xl font-semibold mt-4">
                    - YOUR CART IS EMTRY -
                  </h1>
                </div>
              </>
            )}
          </div>
          <div className="flex w-1/3 ">
            <div className="flex flex-col py-9 px-8 w-full text-slate-800 ">
              <div className="flex">
                <h2 className="text-2xl font-semibold ">SUMMARY ORDER</h2>
              </div>
              <div className="border-2 mt-6 bg-red-800 w-full flex"></div>
              <div className="flex justify-between mt-8 font-medium">
                <h1>ITEMS</h1>
                <h1>{list.length}</h1>
              </div>
              {/* <div className="flex flex-col">
                <h2 className="font-medium mt-8">SHIPING</h2>
                <div className="items-center flex mt-5">
                  <Dropdown />
                </div>
              </div>

              <div className="flex flex-col mt-8 ">
                <h2 className="font-medium my-auto flex">PROMO CODE</h2>
                <div className="bg-white p-1 flex mt-4 rounded-lg">
                  <input
                    type="text"
                    name="Promo"
                    placeholder="Promo code"
                    className="my-2 mx-4 bg-white outline-none text-sm flex-1 "
                  />
                </div>
              </div> */}
              <div className="border-2 mt-10 bg-red-800 w-full flex"></div>
              <div className="flex justify-between mt-10">
                <h2>TOTAL COST : </h2>
                <h2>{totalPrice} THB.</h2>
              </div>
              <a
                href="#"
                className="mt-10 justify-center text-center py-2
                    bg-red-900 text-white rounded-lg hover:bg-white 
                    hover:text-red-900 hover:ring-1 hover:ring-red-900
                    duration-300
                "
                onClick={() => {
                  alert("ชำระเงินเรียบร้อย");
                  localStorage.removeItem("cart");
                  window.location = "/";
                }}
              >
                CHECK OUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
