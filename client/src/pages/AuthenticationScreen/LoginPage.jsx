import Header from "../layout/Header";
import Footer from "../layout/Footer";
import UserInfoForm from "../layout/UserInfoForm";
import { Layout } from "antd";
const { Content } = Layout;

export default function LoginPage() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <Layout style={{ height: "100vh" }}>
      <Header userInfo={userInfo} />
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserInfoForm
          status="login"
          msg={{
            title: "Sign in into your account",
            buttonText: "Sign in",
            message: "Don't have an account?",
            linkText: "Sign up",
            link: "/signup",
          }}
        />
      </Content>
      <Footer />
    </Layout>
  );
}
