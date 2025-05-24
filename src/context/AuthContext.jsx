import { createContext, useContext } from "react";
import { app } from "../services/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const AuthContext = createContext(null);

const firebaseAuth = getAuth(app)
const provider = new GoogleAuthProvider()

const register = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
}

const login = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
}

const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, provider)
}

const logout = () => {
    signOut(firebaseAuth)
}

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{register, login, signInWithGoogle, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)