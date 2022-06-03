import "../styles/globals.css";
import Navbar from "../components/navbar";
import Axios from "axios";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
