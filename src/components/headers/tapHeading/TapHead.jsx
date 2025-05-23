import React from "react";
import { Helmet } from "react-helmet-async";

const TapHead = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default TapHead;
