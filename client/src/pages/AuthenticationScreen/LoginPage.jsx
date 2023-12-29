import Header from "../layout/Header";
import Footer from "../layout/Footer";
import UserInfoForm from "../layout/UserInfoForm";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

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

      <Footer />
    </div>
  );
}
