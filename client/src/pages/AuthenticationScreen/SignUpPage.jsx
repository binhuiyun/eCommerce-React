import Header from "../layout/Header";
import Footer from "../layout/Footer";
import UserInfoForm from "../layout/UserInfoForm";
import { Layout } from "antd";
const { Content } = Layout;

export default function SignUpPage() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header loggedIn="false" />
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserInfoForm
          status="signup"
          msg={{
            title: "Sign up account",
            buttonText: "Create account",
            message: "Already have an account?",
            linkText: "Sign in",
            link: "/login",
          }}
        />
      </Content>
      <Footer />
    </Layout>
  );
}
