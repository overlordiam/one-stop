import React from "react";
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";

const SigninandSignupPage = () => (
  <div className = "sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SigninandSignupPage;
