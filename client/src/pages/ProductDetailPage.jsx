import Header from "./layout/Header";
import Footer from "./layout/Footer";

const mockInfo = {
  productName: "Apple Macbook Pro",
  productDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  category: "Laptop",
  price: "1599",
  quantity: 0,
  link: "",
};

export default function ProductDetailPage() {
  const { productName, productDescription, category, price, quantity, link } =
    mockInfo;
  return (
    <>
      <Header />
      <div className="flex flex-col w-full items-center mb-12">
        <h2 className="w-[90%] mt-12 mb-6 text-3xl font-bold text-black sm:text-center md:text-left">
          Products Detail
        </h2>
        <div className="sm:w-[80%] md:w-[90%] flex sm:flex-col md:flex-row bg-white shadow-lg items-center">
          <div className="sm:mt-5 md:mt-0 sm:w-[90%] md:w-1/2 sm:h-[50%] md:h-[90%] sm:ml-0 md:ml-[5%] flex justify-center items-center">
            <img src="/product.jpg" />
          </div>
          <div className="sm:w-[80%] md:w-[45%] h-full flex justify-center items-center">
            <div className="sm:w-[100%] md:w-[80%] h-[90%]">
              <h3 className="text-[#6B7280] sm:mt-2 md:mt-10 sm:text-sm md:text-lg">
                {category}
              </h3>
              <h2 className="sm:mt-2 md:mt-4 sm:text-md md:text-3xl font-bold text-black">
                {productName}
              </h2>
              <div className="flex flex-row">
                <h2 className="sm:mt-4 md:mt-6 sm:text-md md:text-3xl font-bold text-black">{`$${price}`}</h2>
                {quantity <= 0 && (
                  <div className="sm:mt-2 md:mt-6 sm:ml-2 md:ml-4 sm:w-[60px] md:w-[90px] sm:h-[30px] md:h-[30px] bg-pink-300 text-red-600 sm:text-[8px] md:text-xs flex items-center justify-center border border-pink-300 rounded-md">
                    Out of Stock
                  </div>
                )}
              </div>
              <p className="text-[#6B7280] sm:mt-4 md:mt-6 sm:text-[10px] md:text-lg">
                {productDescription}
              </p>
              <div className="flex flex-row sm:mt-4 md:mt-8 mb-10">
                <button className="bg-purple-900 text-white flex justify-center items-center px-6 py-2 border-purple-900 rounded-md sm:text-[10px] md:text-md">
                  Add To Cart
                </button>
                <button className="border border-[#6B7280] flex justify-center items-center bg-white px-12 py-2 rounded-md ml-4 sm:text-[10px] md:text-md">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}