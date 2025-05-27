import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, orderBy, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const RecipeContext = createContext();

export function useRecipes() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = useCallback(async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "recipes"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRecipes(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
      setError("Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleBookmark = useCallback(async (recipeId, uid) => {
    if (!uid) return false;

    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      let updatedBookmarks;
      let saved;

      if (!userSnap.exists()) {
        await setDoc(userRef, { bookmarks: [recipeId] });
        return true;
      }

      const currentBookmarks = userSnap.data().bookmarks || [];

      if (currentBookmarks.includes(recipeId)) {
        updatedBookmarks = currentBookmarks.filter(id => id !== recipeId);
        saved = false;
      } else {
        updatedBookmarks = [...currentBookmarks, recipeId];
        saved = true;
      }

      await updateDoc(userRef, { bookmarks: updatedBookmarks });
      return saved;
    } catch (err) {
      console.error("Failed to toggle bookmark:", err);
      return false;
    }
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const value = {
    recipes,
    loading,
    error,
    fetchRecipes,
    toggleBookmark
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}