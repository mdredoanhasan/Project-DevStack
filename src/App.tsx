import { Suspense } from "react";
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";
import Technologies from "./component/Technology/Technologies";
import type { TechnoType } from "./Types/TechnoType";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const technoFetech = async (): Promise<TechnoType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

export default function App() {
  const technoPromise = technoFetech();
  return (
    <>
      <NavBar />
      <Banner />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Technologies technoPromise={technoPromise} />
      </Suspense>
      <Footer />
      <ToastContainer position="bottom-right"/>
      
    </>
  );
}
