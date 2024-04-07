import ProductCard from "./ProductCard";
import { Layout } from "antd";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";

const Home = () => {

  return (
    <Layout className="min-h-screen justify-between">
     {/* <Header userInfo={userInfo} /> */}
      <ProductCard />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
