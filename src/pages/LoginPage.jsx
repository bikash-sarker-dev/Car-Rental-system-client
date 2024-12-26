import React from "react";
import TapHead from "../components/headers/tapHeading/TapHead";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <TapHead title="Car | Login" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
