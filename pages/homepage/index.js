import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="">
        <div className="bg-gray-800 p-2">
          <div className="flex flex-row">
            <div className="flex p-36 basis-3/6">
              <div className="flex flex-col font-serif text-white">
                <div className="flex">
                  <h1 className="text-7xl ">Welcome to Motor</h1>
                </div>
                <div className="border-2 my-6"></div>
                <div className="flex">
                    <p> </p>
                </div>
              </div>
            </div>
            <div className="flex p-5 basis-3/6 justify-center">
              <img src="../assets/homepage/H01.png" className="w-1/1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
