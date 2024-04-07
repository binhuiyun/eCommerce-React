import React from 'react';
import AuthForm from '../../components/AuthForm';


export default function SignUp() {



  return (
    <div>
      <AuthForm
        method="signup"
        path="/login"
        buttonText="Create account"
        title="Sign up an account"
        msg="Already have an account?"
        linkText="Sign in"
      />
    </div>
  );
}