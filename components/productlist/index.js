import { useState, useMemo, memo } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

const ProductList = (props) => {
  let { products, category } = props;
  const [showModal, setShowModal] = useState(false);
  const [recommend, setRecommend] = useState();

  let raw = [...products];

  if (category != "All")
    products = products.filter(
      (p) => p.categoryName === category.toLowerCase()
    );
  else products = products;

  const notify = (id) => toast.success("Added cart ");

  const handleSelectProduct = (id, category, product) => {
    id = id - 1;
    notify();
    let cart = localStorage.getItem("cart");
    let listSelected;
    if (cart === null) {
      listSelected = id + " ";
    } else {
      listSelected = cart + " " + id;
    }
    localStorage.setItem("cart", listSelected);

    if (product == "M004") {
      setShowModal(true);
      setRecommend(68 - 1);
    } else if (product == "M006") {
      setShowModal(true);
      setRecommend(66-1);
    } else if (product == "M008") {
      setShowModal(true);
      setRecommend(71-1);
    } else if (product == "M009") {
      setShowModal(true);
      setRecommend(70-1);
    } else if (product == "M010") {
      setShowModal(true);
      setRecommend(67-1);
    } else if (product == "M005") {
      setShowModal(true);
      setRecommend(72-1);
    }
  };

  const handleRec = () => {
    notify();
    let cart = localStorage.getItem("cart");
    let listSelected;
    if (cart === null) {
      listSelected = recommend + " ";
    } else {
      listSelected = cart + " " + recommend;
    }
    localStorage.setItem("cart", listSelected);
    setShowModal(false);
  };

  return (
    <div className="bg-white">
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">สินค้าแนะนำ</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img
                    src={
                      "../../assets/web/" +
                      raw[recommend].categoryName +
                      "/" +
                      raw[recommend].productId +
                      ".png"
                    }
                    width={500}
                  ></img>
                  <div className="flex justify-between mt-5">
                    <p>{raw[recommend].productName}</p>
                    <p>{raw[recommend].productPrice} THB.</p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleRec()}
                  >
                    เพิ่มลงตระกร้า
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div
        className="max-w-2xl mx-auto py-16 px-4 sm:py-24 
      sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {category ? <>{category}</> : "All"}
        </h2>
        <div
          className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 
        sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.map((product, i) => (
            <div key={i} className="group relative">
              <div
                className="bg-white rounded-full p-3 z-10 
                absolute top-3 right-3 shadow-lg border-2
                border-slate-200 text-2xl text-slate-700 cursor-pointer
                transition ease-in-out hover:-translate-1 hover:scale-110
                 duration-300"
                onClick={() =>
                  handleSelectProduct(
                    product.id,
                    product.categoryId,
                    product.productId
                  )
                }
              >
                <BsCartPlusFill />
              </div>
              <Toaster position="bottom-right" reverseOrder={false} />
              <div
                className="w-full min-h-80 bg-gray-200 aspect-w-1 
              aspect-h-1 rounded-md
               overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
              >
                <img
                  src={
                    "../../assets/web/" +
                    product.categoryName +
                    "/" +
                    product.productId +
                    ".png"
                  }
                  className="w-full h-full object-center object-cover 
                  lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.productName}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.productPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
