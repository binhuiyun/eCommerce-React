import { useNavigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Dummy() {
  const Navigate = useNavigate();

  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="mb-10 text-5xl">Checkout Successfully</h1>
        <button
          onClick={(e) => Navigate("/display-product")}
          className="border border-black rounded-md px-6 py-3 hover:bg-indigo-600 hover:text-white"
        >
          Go Back To Shopping!
        </button>
      </div>

      <Footer />
    </div>
  );
}
