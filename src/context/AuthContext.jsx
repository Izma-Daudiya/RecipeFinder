// import { createContext, useContext, useEffect } from "react";
// import { app } from "../services/firebase";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { useState } from "react";

// const AuthContext = createContext(null);

// const firebaseAuth = getAuth(app)
// const provider = new GoogleAuthProvider()

// const register = (email, password) => {
//     createUserWithEmailAndPassword(firebaseAuth, email, password)
// }

// const login = (email, password) => {
//     signInWithEmailAndPassword(firebaseAuth, email, password)
// }

// const signInWithGoogle = () => {
//     signInWithPopup(firebaseAuth, provider)
// }

// const logout = () => {
//     signOut(firebaseAuth)
// }

// export const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, setUser);
//         return () => unsubscribe();
//   }, []);
//     return (
//         <AuthContext.Provider value={{register, login, signInWithGoogle, logout, user}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => useContext(AuthContext)
import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../services/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider
} from "firebase/auth";

const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    return signInWithPopup(auth, provider);
  };

  const logout = async () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
