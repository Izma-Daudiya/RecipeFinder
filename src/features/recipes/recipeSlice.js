// features/recipes/recipeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  savedRecipes: [],
  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    fetchRecipesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess(state, action) {
      state.recipes = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRecipesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    toggleSaveRecipe(state, action) {
      const recipeId = action.payload;
      if (state.savedRecipes.includes(recipeId)) {
        state.savedRecipes = state.savedRecipes.filter(id => id !== recipeId);
      } else {
        state.savedRecipes.push(recipeId);
      }
    },
  },
});

export const { 
  fetchRecipesStart, 
  fetchRecipesSuccess, 
  fetchRecipesFailure,
  toggleSaveRecipe 
} = recipeSlice.actions;
export default recipeSlice.reducer;