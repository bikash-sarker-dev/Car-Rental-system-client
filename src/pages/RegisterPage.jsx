import React from "react";
import TapHead from "../components/headers/tapHeading/TapHead";
import FormHeading from "../components/login/FormHeading";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <TapHead title="Car | Register" />
      <FormHeading title="Get started with easily register" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
