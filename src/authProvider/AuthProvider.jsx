import React from "react";
import { AuthContext } from "../contextApi/MakeContext";

const AuthProvider = ({ children }) => {
  let allDataShare = {
    name: "shrabon",
  };
  return (
    <AuthContext.Provider value={allDataShare}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
