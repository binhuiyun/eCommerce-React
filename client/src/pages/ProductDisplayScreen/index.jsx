import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "./ProductCard";
import { Layout} from "antd";
const { Content } = Layout;
const ProductDisplayScreen = () => {
  return (
    <Layout>
      <Header/>
      <Content>
        <ProductCard />
      </Content>
   
      <Footer />
    </Layout>
  );
};

export default ProductDisplayScreen;
