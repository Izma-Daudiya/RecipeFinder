// routes/AppRoutes.js
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const AddRecipe = lazy(() => import("../pages/AddRecipe"));
const RecipeDetail = lazy(() => import("../pages/RecipeDetail"));
const SavedRecipes = lazy(() => import("../pages/SavedRecipes"));
const SearchResults = lazy(() => import("../pages/SearchResults"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<SearchResults />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Route>
      </Routes>
    </Suspense>
  );
}