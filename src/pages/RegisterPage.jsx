import React from "react";
import FormHeading from "../components/login/FormHeading";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <FormHeading title="Get started with easily register" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
