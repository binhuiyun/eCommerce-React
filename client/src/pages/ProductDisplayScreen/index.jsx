import ProductCard from "./ProductCard";
import { Layout } from "antd";
const { Content } = Layout;
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const ProductDisplayScreen = () => {
  return (
    <Layout style={{height:"100vh"}}>
      <Header />
      <Content>
        <ProductCard />
      </Content>
      <Footer />
    </Layout>
  );
};

export default ProductDisplayScreen;
