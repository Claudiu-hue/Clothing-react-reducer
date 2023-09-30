import React from "react";
import SignUpForm from "../../components/sign-up-form/sing-up-form.component";
import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authenticaiton.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
