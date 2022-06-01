import ProductList from "../../components/productlist";

const Product = () => {
  return (
    <>
      <div
        className=" py-32 
      flex flex-col m-auto items-center rounded-b-3xl shadow-md 
      bg-hero-pattern bg-cover bg-center"
      >
        <h2 className="text-4xl text-white font-bold">ProductList</h2>
      </div>
      <div className="container mx-auto">
        <div class="grid grid-flow-col gap-7 items-center text-center -mt-14">
          <div
            className="bg-white p-24 border-2 rounded-lg 
          border-gray-200 shadow-md bg-category-01 bg-cover bg-center
          "
          >
            01
          </div>
          <div
            className=" bg-white p-24 border-2 rounded-lg 
          border-gray-200 shadow-md bg-category-02 bg-cover bg-center "
          >
            02
          </div>
          <div
            className="bg-white p-24 border-2 rounded-lg 
            border-gray-200 shadow-md bg-category-03 bg-cover bg-center"
          >
            03
          </div>
        </div>
      </div>

      <ProductList />
    </>
  );
};
export default Product;
