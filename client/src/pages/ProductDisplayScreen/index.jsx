
import ProductCard from "./ProductCard";
import { Layout} from "antd";
const { Header, Footer, Content } = Layout;
const ProductDisplayScreen = () => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <ProductCard />
      </Content>
      <Footer>
        footer
      </Footer>
    </Layout>
  );
};

export default ProductDisplayScreen;
