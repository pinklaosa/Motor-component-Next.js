import { useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
const ProductList = (props) => {
  let { products, category } = props;

  return (
    <div className="bg-white">
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
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div
                className="bg-white rounded-full p-3 z-10 
                absolute top-3 right-3 shadow-lg border-2
                border-slate-200 text-2xl text-slate-700 cursor-pointer
                transition ease-in-out delay-150 hover:-translate-1 hover:scale-110
                 duration-300"
              >
                <BsCartPlusFill />
              </div>
              <div
                className="w-full min-h-80 bg-gray-200 aspect-w-1 
              aspect-h-1 rounded-md
               overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover 
                  lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
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
