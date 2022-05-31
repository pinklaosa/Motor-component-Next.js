import Head from "next/head";
import { FaOpencart } from "react-icons/fa";
import Dropdown from "../../components/dropdown";

const Cart = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let cart = [];
  let shiping = ["1", "2", "3", "4", "5", "6"];
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <div className=" container mx-auto my-20">
        <div className="flex flex-row">
          <div className="flex flex-col w-2/3 px-12 py-5 text-slate-800">
            <div className="flex justify-between ">
              <h2 className="text-3xl font-semibold">SHOPPING CART</h2>
              <h2 className="text-3xl font-semibold">0 ITEMS</h2>
            </div>
            <div className="border-2 mt-8 bg-slate-400"></div>
            {cart.length > 0 ? (
              <></>
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
          <div className="flex w-1/3 bg-gray-100">
            <div className="flex flex-col py-9 px-8 w-full text-slate-800">
              <div className="flex">
                <h2 className="text-2xl font-semibold ">SUMMARY ORDER</h2>
              </div>
              <div className="border-2 mt-6 bg-red-800 w-full flex"></div>
              <div className="flex justify-between mt-8 font-medium">
                <h1>ITEMS</h1>
                <h1>0 THB.</h1>
              </div>
              <div className="flex flex-col">
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
              </div>
              <div className="border-2 mt-10 bg-red-800 w-full flex"></div>
              <div className="flex justify-between mt-10">
                <h2>TOTAL COST : </h2>
                <h2>1000 THB.</h2>
              </div>
              <a
                href="#"
                className="mt-10 justify-center text-center py-2
                    bg-red-900 text-white rounded-lg hover:bg-white 
                    hover:text-red-900 hover:ring-1 hover:ring-red-900
                    duration-300
                "
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
