import Header from "./layout/Header";
import Footer from "./layout/Footer";
import GroupButtons from "./ProductDisplayScreen/ProductCard/GroupButtons";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout } from "antd";

// const mockInfo = {
//   productName: "Apple Macbook Pro",
//   productDescription:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   category: "Laptop",
//   price: "1599",
//   quantity: 0,
//   link: "",
// };

export default function ProductDetailPage() {
  // const { productName, productDescription, category, price, quantity, link } =
  //   mockInfo;
  const [productInfo, setProductInfo] = useState({});
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setProductInfo({ ...state });
    }
  }, [state]);

  if (!state) return <>Loading...</>;
  return (
    <Layout style={{ height: "100vh" }}>
      <Header loggedIn="true" />

      <div className="flex flex-col w-screen h-screen items-center mb-12">
        <h2 className="w-[90%] mt-12 mb-6 text-3xl font-bold text-black xs:text-center md:text-left">
          Products Detail
        </h2>
        <div className="xs:w-[80%] md:w-[90%] flex xs:flex-col md:flex-row bg-white shadow-lg items-center">
          <div className="xs:mt-5 md:mt-0 xs:w-[90%] md:w-1/2 xs:h-[50%] md:h-[80%] xs:ml-0 md:ml-[5%] flex justify-center items-center">
            <img src={`${productInfo.link}`} className="w-[100%] h-[100%]" />
          </div>
          <div className="xs:w-[80%] md:w-[45%] h-full flex justify-center items-center">
            <div className="xs:w-[100%] md:w-[80%] h-[90%]">
              <h3 className="text-[#6B7280] xs:mt-2 md:mt-10 xs:text-sm md:text-lg">
                {productInfo.category}
              </h3>
              <h2 className="xs:mt-2 md:mt-4 xs:text-md md:text-3xl font-bold text-black">
                {productInfo.productName}
              </h2>
              <div className="flex flex-row">
                <h2 className="xs:mt-4 md:mt-6 xs:text-md md:text-3xl font-bold text-black">{`$${productInfo.price}`}</h2>
                {productInfo.quantity <= 0 && (
                  <div className="xs:mt-2 md:mt-6 xs:ml-2 md:ml-4 xs:w-[60px] md:w-[90px] xs:h-[30px] md:h-[30px] bg-pink-300 text-red-600 xs:text-[8px] md:text-xs flex items-center justify-center border border-pink-300 rounded-md">
                    Out of Stock
                  </div>
                )}
              </div>
              <p className="text-[#6B7280] xs:mt-4 md:mt-6 xs:text-[10px] md:text-lg">
                {productInfo.productDescription}
              </p>
              <div className="flex flex-row w-1/2 xs:mt-4 md:mt-8 mb-10">
                <GroupButtons
                  productData={{
                    productID: productInfo._id,
                    productPrice: productInfo.price,
                    productQuantity: productInfo.quantity,
                    productTitle: productInfo.productName,
                    productDescription: productInfo.productDescription,
                    productCategory: productInfo.category,
                  }}
                />
                <button className="flex items-center justify-center w-1/2 text-base border border-[#6B7280] rounded-md ml-4 transition-colors duration-300 hover:bg-gray-300">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
