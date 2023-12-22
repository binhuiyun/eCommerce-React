
import ProductForm from "./ProductForm";
import "./ProductForm/product.css";
import { Layout} from "antd";
const { Header, Footer, Content, Sider } = Layout;

const siderStyle = {
  backgroundColor: "#f0f0f0",

};

  const ProductCreateScreen = () => {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider width="25%" breakpoint="md" collapsedWidth='0' style={siderStyle} trigger={null} ></Sider>
      <Content style={siderStyle}>
        <ProductForm />
      </Content>
      <Sider width="25%" breakpoint="md" collapsedWidth='0' style={siderStyle} trigger={null}></Sider>
      </Layout>
      <Footer>
        footer
      </Footer>
    </Layout>
  );
};

export default ProductCreateScreen;
