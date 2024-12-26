import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../contextApi/MakeContext";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const accountLogout = () => {
    return signOut(auth);
  };
  console.log(user);
  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, async (CurrentUser) => {
      setUser(CurrentUser);
      if (CurrentUser?.email) {
        const user = { email: CurrentUser?.email };
        await axios
          .post(`https://car-rental-server-sage.vercel.app/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("login", res.data);
            setLoading(false);
          });
      } else {
        await axios
          .post(`https://car-rental-server-sage.vercel.app/logout`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  let allDataShare = {
    user,
    setUser,
    loading,
    setLoading,
    createNewAccount,
    loginAccount,
    accountLogout,
  };
  return (
    <AuthContext.Provider value={allDataShare}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
