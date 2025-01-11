import React from "react";
import TapHead from "../components/headers/tapHeading/TapHead";
import FormHeading from "../components/login/FormHeading";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="bg-car-info">
      <TapHead title="Car | Register" />
      <div className="pt-24 bg-car-info">
        <FormHeading title="Get started with easily register" />
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
