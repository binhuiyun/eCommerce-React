import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductForm from "./ProductForm";
import EditProduct from "./ProductForm/EditProduct";
import "./ProductForm/product.css";
import { Layout} from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Content, Sider } = Layout;

const siderStyle = {
  backgroundColor: "#f0f0f0",
};

const ProductCreateScreen = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const edit = useSelector((state) => state.edit);
  
  return (
    <Layout style={{ height: "100vh" }}>
      <Header userInfo={userInfo}/>
      <Layout>
        <Sider
          width="27%"
          breakpoint="xs"
          collapsedWidth="0"
          style={siderStyle}
          trigger={null}
        ></Sider>
        <Content style={siderStyle}>
          {!edit && <ProductForm />}
          {edit && <EditProduct /> }

        </Content>
        <Sider
          width="27%"
          breakpoint="xs"
          collapsedWidth="0"
          style={siderStyle}
          trigger={null}
        ></Sider>
      </Layout>
      <Footer/>
    </Layout>
  );
};

export default ProductCreateScreen;
