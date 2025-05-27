// components/RecipeCard.js
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSaveRecipe } from "../features/recipes/recipeSlice";
import { useAuth } from "../context/AuthContext";

export default function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const savedRecipes = useSelector((state) => state.recipes.savedRecipes);
  const isSaved = savedRecipes.includes(recipe.id);

  const handleToggleSave = (e) => {
    e.preventDefault();
    if (!user) return;
    dispatch(toggleSaveRecipe(recipe.id));
    // You'll need to implement the actual save to backend here
  };

  return (
    <Link 
      to={`/recipe/${recipe.id}`} 
      className="block group"
    >
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Save Button */}
        <button
          onClick={handleToggleSave}
          className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white"
          aria-label={isSaved ? "Remove from saved" : "Save recipe"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isSaved ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Recipe Image */}
        {recipe.imageUrl && (
          <div className="h-48 overflow-hidden">
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Recipe Content */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {recipe.name}
            </h3>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {recipe.difficulty}
            </span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 text-xs text-gray-600 mb-3">
            {recipe.categories?.slice(0, 3).map((cat, idx) => (
              <span
                key={idx}
                className="bg-gray-100 px-2 py-0.5 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Time and Servings */}
          <div className="text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1 mt-auto">
            <span>Prep: {recipe.prepTime} min</span>
            <span>Cook: {recipe.cookTime} min</span>
            <span>Servings: {recipe.servings}</span>
          </div>

          {/* View Button */}
          <div className="mt-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                // The Link component handles the navigation
                // This is just to prevent the parent Link from triggering
                // if the button is clicked directly
                e.stopPropagation();
                // The actual navigation is handled by the parent Link
              }}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
            >
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}