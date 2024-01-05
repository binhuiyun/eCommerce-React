import { Layout } from "antd";
const { Content } = Layout;
import { Flex } from "antd";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ProductCard from "./ProductDisplayScreen/ProductCard";
import ProductCardItem from "./ProductDisplayScreen/ProductCard/ProductCardItem";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("user"));
 
  useEffect(() => {
    fetchResults();
  }, [searchParams]);

  async function fetchResults() {
    const searchKey = searchParams.get("searchKey");
    try {
      await axios.get(`/api/search/${searchKey}`).then((response) => {
        setProducts(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Header userInfo={userInfo}/>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="flex flex-col bg-white rounded p-4">
          <Flex wrap="wrap" gap="middle" className="flex">
            {products &&
              products.map((product) => (
                <ProductCardItem
                  key={product._id}
                  _id={product._id}
                  title={product.name}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  quantity={product.quantity}
                />
              ))}
          </Flex>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default SearchResultPage;
