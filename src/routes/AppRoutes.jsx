import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgotPassword";
import AddRecipe from "../pages/AddRecipe";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/add-recipe" element={<AddRecipe/>}></Route>
        </Routes>
    )
}