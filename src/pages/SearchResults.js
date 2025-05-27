// pages/SearchResults.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import RecipeCard from "../components/RecipeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const q = query(
          collection(db, "recipes"),
          where("name", ">=", searchQuery),
          where("name", "<=", searchQuery + '\uf8ff')
        );
        
        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setRecipes(results);
      } catch (err) {
        console.error("Error searching recipes:", err);
        setError("Failed to search recipes");
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery.trim()) {
      fetchSearchResults();
    } else {
      setRecipes([]);
      setLoading(false);
    }
  }, [searchQuery]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          Search Results for "{searchQuery}"
        </h1>
        <p className="text-gray-600 mb-8">
          {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} found
        </p>
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : recipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No recipes found matching your search.</p>
            <Link 
              to="/" 
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Browse all recipes
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