// pages/SavedRecipes.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure } from "../features/recipes/recipeSlice";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import RecipeCard from "../components/RecipeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";

export default function SavedRecipes() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { savedRecipes } = useSelector((state) => state.recipes);
  const { recipes, loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (!user || savedRecipes.length === 0) return;
      
      try {
        dispatch(fetchRecipesStart());
        
        const q = query(
          collection(db, "recipes"),
          where("id", "in", savedRecipes)
        );
        
        const querySnapshot = await getDocs(q);
        const recipesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        dispatch(fetchRecipesSuccess(recipesData));
      } catch (err) {
        console.error("Error fetching saved recipes:", err);
        dispatch(fetchRecipesFailure(err.message));
      }
    };

    fetchSavedRecipes();
  }, [user, savedRecipes, dispatch]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Saved Recipes</h1>
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : savedRecipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">You haven't saved any recipes yet.</p>
            <Link 
              to="/" 
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Browse recipes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}