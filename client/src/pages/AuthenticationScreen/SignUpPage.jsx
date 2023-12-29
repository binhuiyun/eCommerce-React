import Header from "../layout/Header";
import Footer from "../layout/Footer";
import UserInfoForm from "../layout/UserInfoForm";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

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

      <Footer />
    </div>
  );
}
