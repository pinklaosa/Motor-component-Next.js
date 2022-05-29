import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import HomePage from "./homepage";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
};
export default Home;
