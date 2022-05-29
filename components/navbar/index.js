import { BiUser } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { FcElectroDevices } from "react-icons/fc";

const Navbar = () => {
  const menuBar = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Product",
      link: "/login",
    },
  ];

  return (
    <nav
      className="bg-white border-gray-200 px-2 sm:px-4 py-4 rounded
      shadow-xl sticky top-0"
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
            <span className="text-5xl mr-5"><FcElectroDevices/></span>
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            B - Motor
          </span>
        </a>
        <div className="flex items-center p-3">
          {menuBar.map((m, i) => (
            <div className=" py-2 px-5" key={i}>
              <a href={m.link} className="font-semibold hover:text-sky-600">
                {m.name}
              </a>
            </div>
          ))}
          <a
            href="#"
            className="rounded-full p-3 border-2 bg-white ml-8
            hover:bg-sky-600 hover:text-white duration-300
          "
          >
            <span>
              <BsCart />
            </span>
          </a>
          <div className="border-2 border-gray-300 w-8 rounded-md rotate-90"></div>
          <a
            href="#"
            className="rounded-full p-3 border-2 bg-white 
          hover:bg-sky-600 hover:text-white duration-300"
          >
            <span>
              <BiUser />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
