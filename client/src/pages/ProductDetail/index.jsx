// import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import GroupButton from "../Home/ProductCard/GroupButton";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { toggleEdit } from "../../redux/editSlice";
import { fetchCartThunk } from "../../thunks/cart-thunk";
import { getCurrentProductThunk } from "../../thunks/product-thunk";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector((state) => state.product);
  const {user} = useSelector((state) => state.auth);
  const edit = useSelector((state) => state.edit);
  const navigate = useNavigate();
  const handleEdit = () => {
    dispatch(toggleEdit(!edit));
    navigate(`/edit-product/${product._id}`);
  };

  useEffect(() => {
    dispatch(getCurrentProductThunk(id), [id]);

  }, [id, dispatch]);

  return (
    <Layout className="min-h-screen justify-between">
      {/* <Header userInfo={userInfo} /> */}

      <div className="flex flex-col mb-auto items-center">
        <h2 className="w-[90%] mt-12 mb-6 text-3xl font-bold text-black xs:text-center md:text-left">
          Product Details
        </h2>
        <div className="xs:w-[80%] md:w-[90%] flex xs:flex-col md:flex-row bg-white shadow-lg items-center mb-4">
          <div className="xs:mt-5 md:mt-0 xs:w-[90%] md:w-1/2 xs:h-[50%] md:h-[90%] xs:ml-0 md:ml-[5%] flex justify-center items-center">
            <img
              src={`${product.image}`}
              className="m-8 object-contain h-1/2 w-1/2"
            />
          </div>
          <div className="xs:w-[80%] md:w-[45%] h-full flex justify-center items-center">
            <div className="xs:w-[100%] md:w-[80%] h-[90%]">
              <h3 className="text-[#6B7280] xs:mt-2 md:mt-10 xs:text-sm md:text-lg">
                {product.category}
              </h3>
              <h2 className="xs:mt-2 md:mt-4 xs:text-md md:text-3xl font-bold text-black">
                {product.name}
              </h2>
              <div className="flex flex-row">
                <h2 className="xs:mt-4 md:mt-6 xs:text-md md:text-3xl font-bold text-black">{`$${product.price}`}</h2>
                {product.stockQuantity <= 0 && (
                  <div className="xs:mt-2 md:mt-6 xs:ml-2 md:ml-4 xs:w-[60px] md:w-[90px] xs:h-[30px] md:h-[30px] bg-pink-300 text-red-600 xs:text-[8px] md:text-xs flex items-center justify-center border border-pink-300 rounded-md">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="whitespace-pre-line">
                <p className="text-[#6B7280] xs:mt-4 md:mt-6 xs:text-[10px] md:text-lg">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-row xl:w-1/2 xs:mt-4 md:mt-8 mb-10">
                <GroupButton product={product} />
                {user.email=== "admin@gmail.com" && (
                  <button
                    className="flex items-center justify-center w-1/2 text-base border border-[#6B7280] rounded-md ml-4 transition-colors duration-300 hover:bg-gray-300"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </Layout>
  );
}
