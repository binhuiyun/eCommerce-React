import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductForm from "./ProductForm";
import "./ProductForm/product.css";
import { Layout } from "antd";
const { Content, Sider } = Layout;

const siderStyle = {
  backgroundColor: "#f0f0f0",
};

const ProductCreateScreen = () => {
  return (
    <>
      <Header />

      <Layout>
        <Sider
          width="27%"
          breakpoint="xs"
          collapsedWidth="0"
          style={siderStyle}
          trigger={null}
        ></Sider>
        <Content style={siderStyle}>
          <ProductForm />
        </Content>
        <Sider
          width="27%"
          breakpoint="xs"
          collapsedWidth="0"
          style={siderStyle}
          trigger={null}
        ></Sider>
      </Layout>

      <Footer />
    </>
  );
};

export default ProductCreateScreen;
