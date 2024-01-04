import Header from "../layout/Header";
import Footer from "../layout/Footer";
import UserInfoForm from "../layout/UserInfoForm";
import { Layout } from "antd";
const { Content } = Layout;

export default function ForgotPasswordPage() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header loggedIn="false"/>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserInfoForm
          status="forgot-password"
          msg={{
            title: "Update your password",
            buttonText: "Update password",
            message:
              "Enter your email address, we will send you a link to reset your password.",
          }}
        />
      </Content>
      <Footer />
    </Layout>
  );
}
