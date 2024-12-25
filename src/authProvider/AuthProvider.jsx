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
    setLoading(true);
    return signOut(auth);
  };
  console.log(user);
  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        setUser(user);
        const { data } = await axios.post(
          `http://localhost:5000/jwt`,
          {
            email: user?.email,
          },
          { withCredentials: true }
        );
      } else {
        setUser(user);
        const { data } = await axios.get(`http://localhost:5000/logout`, {
          withCredentials: true,
        });
      }

      setLoading(false);
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
