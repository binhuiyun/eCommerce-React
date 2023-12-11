import Header from "./layout/Header";
import Footer from "./layout/Footer";
import UserInfoForm from "./layout/UserInfoForm";

export default function ForgotPasswordPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

      <UserInfoForm
        status="forgot-password"
        msg={{
          title: "Update your password",
          buttonText: "Update password",
          message:
            "Enter your email address, we will send you a link to reset your password.",
        }}
      />

      <Footer />
    </div>
  );
}
