import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = useCallback((email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }, []);

  const login = useCallback((email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signInWithGoogle = useCallback(() => {
    return signInWithPopup(auth, provider);
  }, []);

  const logout = useCallback(() => {
    return signOut(auth);
  }, []);

  const resetPassword = useCallback((email) => {
    return sendPasswordResetEmail(auth, email);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    signInWithGoogle,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);