import Image from "next/image";
import Navbar from "./components/Navbar";
import Insert from "./components/Insert";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Insert></Insert>
      <Footer></Footer>
    </>
  );
}
