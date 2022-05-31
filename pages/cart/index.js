import Head from "next/head";
import { FaOpencart } from "react-icons/fa";

const Cart = () => {
  let cart = [];
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <div className=" container mx-auto mt-20">
        <div className="flex flex-row">
          <div className="flex flex-col w-2/3 px-10 py-5 text-slate-800">
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
                  <h1 className="text-xl font-semibold mt-4">- YOUR CART IS EMTRY -</h1>
                </div>
              </>
            )}
          </div>
          <div className="flex w-1/3 bg-slate-800 p-56"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
