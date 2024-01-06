
import ProductCard from "./ProductCard";
import { Layout } from "antd";
const { Content } = Layout;
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const ProductDisplayScreen = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <Layout>
      <Header userInfo={userInfo}/>
      <Content>
        <ProductCard/>
      </Content>
      <Footer />
    </Layout>
  );
};

export default ProductDisplayScreen;
