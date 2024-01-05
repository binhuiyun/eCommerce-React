import { useNavigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default () => {
  const navigator = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <h1 className="text-xl">Checkout successfully</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigator("/display-product");
        }}
        className="border border-black rounded-md"
      >
        Back to shopping!
      </button>
      <Footer />
    </div>
  );
};
