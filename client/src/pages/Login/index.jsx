import AuthForm from "../../components/AuthForm";

export default function LogIn() {

  return (
    <div>
      <AuthForm
        method="login"
        path="/signup"
        buttonText="Sign in"
        title="Sign in to your account"
        msg="Don't have an account?"
        linkText="Sign up"

      />
    </div>
  );
}
