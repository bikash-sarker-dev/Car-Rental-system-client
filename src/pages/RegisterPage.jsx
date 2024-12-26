import React from "react";
import TapHead from "../components/headers/tapHeading/TapHead";
import FormHeading from "../components/login/FormHeading";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <TapHead title="Car | Register" />
      <div className="mt-24">
        <FormHeading title="Get started with easily register" />
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
