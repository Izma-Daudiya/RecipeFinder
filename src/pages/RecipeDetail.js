// pages/RecipeDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "recipes", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setRecipe({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Recipe not found");
        }
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError("Failed to load recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!recipe) return <div className="text-center py-8">Recipe not found</div>;

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Recipe Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.name}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span>By {recipe.userName}</span>
            <span>•</span>
            <span>Prep: {recipe.prepTime} min</span>
            <span>•</span>
            <span>Cook: {recipe.cookTime} min</span>
            <span>•</span>
            <span>Servings: {recipe.servings}</span>
            <span>•</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
              {recipe.difficulty}
            </span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.categories?.map((category, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Recipe Image */}
          {recipe.imageUrl && (
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="w-full h-96 object-cover"
              />
            </div>
          )}
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2"></span>
                  <span>
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.steps?.map((step, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Notes */}
        {recipe.notes && (
          <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
            <p className="text-gray-700">{recipe.notes}</p>
          </div>
        )}
      </div>
    </>
  );
}