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
            <div className="flex p-36 w-1/2">
              <div className="flex flex-col text-white">
                <div className="flex">
                  <h1 className="text-7xl ">Welcome to Motor</h1>
                </div>
                <div className="border-4 my-10"></div>
                <div className="flex">
                  {/* <a
                    href="#"
                    className="py-3 px-5 border-2 rounded-xl
                      bg-gray-500 text-gray-800 border-gray-500
                    "
                  >
                    Learn more ..{" "}
                  </a> */}
                </div>
              </div>
            </div>
            <div className="flex p-5 w-1/2 justify-center">
              <img src="../assets/homepage/H01.png" className="w-1/1" />
            </div>
          </div>
        </div>
        <div className="container mx-auto p-24 my-2">
          <div className="flex flex-row">
            <div className="flex bg-white w-1/2 justify-center">
              <img src="../assets/homepage/H02.jpg" width={400}></img>
            </div>
            <div className="flex flex-col w-1/2 pl-24 my-auto">
              <p className="text-2xl mb-8">TECHNOLOGY NEWS</p>
              <p className="text-4xl font-semibold mb-8">Human-robot</p>
              <p className="text-lg">
                {" "}
                In human-robot collaboration, the robot assists the human
                operator. This means: The machine does not replace the human,
                but complements his capabilities and relieves him of arduous
                tasks. These can include overhead work, for example, or the
                lifting of heavy loads. Autonomous, collaborative robots are
                also used to supply production workstations
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex w-1/2 bg-slate-400 justify-end py-16">
            <div className="flex flex-row my-auto pt-52">
              <img src="../assets/homepage/B0003.jpg" alt="" width={175}></img>
              <img src="../assets/homepage/B0009.jpg" alt="" width={175}></img>
              <img src="../assets/homepage/B0010.jpg" alt="" width={175}></img>
            </div>
          </div>
          <div className="flex flex-col w-1/2 bg-gray-800 py-16">
            <div className="text-white my-auto pl-24 pr-48">
              <p className="text-2xl mb-8">TECHNOLOGY NEWS</p>
              <p className="text-lg">
                {" "}
                While much of the discourse around AI and automation has been
                concerned with the looming threat to the workforce...
              </p>
            </div>
            <div className="flex flex-row mt-14">
              <img src="../assets/homepage/B0003.jpg" alt="" width={175}></img>
              <img src="../assets/homepage/B0009.jpg" alt="" width={175}></img>
              <img src="../assets/homepage/B0010.jpg" alt="" width={175}></img>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};
export default HomePage;
