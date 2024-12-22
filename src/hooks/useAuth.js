import { useContext } from "react";
import { AuthContext } from "../contextApi/MakeContext";

export const useAuth = () => {
  const result = useContext(AuthContext);
  return result;
};
