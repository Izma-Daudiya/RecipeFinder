import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import Header from "../components/Header";
import RecipeForm from "../components/RecipeForm";

const categoryOptions = [
  "Breakfast", "Lunch", "Dinner", "Dessert", "Snack",
  "Vegan", "Vegetarian", "Non-Vegetarian", "Gluten-Free"
];

const difficultyOptions = ["Easy", "Medium", "Hard"];
const unitOptions = ["g", "kg", "ml", "l", "tsp", "tbsp", "cup", "pcs"];

export default function AddRecipe() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    categories: [],
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    ingredients: [{ name: "", quantity: "", unit: "" }],
    steps: [""],
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      setSubmitting(true);
      setError("");
      
      await addDoc(collection(db, "recipes"), {
        ...recipe,
        userId: user.uid,
        userName: user.displayName || user.email,
        createdAt: serverTimestamp(),
      });

      navigate("/");
    } catch (err) {
      console.error("Error adding recipe:", err);
      setError("Failed to submit recipe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Add New Recipe</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <RecipeForm
          recipe={recipe}
          setRecipe={setRecipe}
          categoryOptions={categoryOptions}
          difficultyOptions={difficultyOptions}
          unitOptions={unitOptions}
          onSubmit={handleSubmit}
          submitting={submitting}
          buttonText="Submit Recipe"
        />
      </div>
    </>
  );
}