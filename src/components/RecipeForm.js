// components/RecipeForm.js
import { useState } from 'react';

export default function RecipeForm({
  recipe,
  setRecipe,
  categoryOptions,
  difficultyOptions,
  unitOptions,
  onSubmit,
  submitting,
  buttonText
}) {
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index][field] = value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { name: "", quantity: "", unit: "" }]
    });
  };

  const removeIngredient = (index) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...recipe.steps];
    newSteps[index] = value;
    setRecipe({ ...recipe, steps: newSteps });
  };

  const addStep = () => {
    setRecipe({ ...recipe, steps: [...recipe.steps, ""] });
  };

  const removeStep = (index) => {
    const newSteps = recipe.steps.filter((_, i) => i !== index);
    setRecipe({ ...recipe, steps: newSteps });
  };

  const toggleCategory = (category) => {
    let newCategories;
    if (recipe.categories.includes(category)) {
      newCategories = recipe.categories.filter(c => c !== category);
    } else {
      newCategories = [...recipe.categories, category];
    }
    setRecipe({ ...recipe, categories: newCategories });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Recipe Name
        </label>
        <input
          type="text"
          id="name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Categories</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {categoryOptions.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                recipe.categories.includes(category)
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Times and Servings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700">
            Prep Time (min)
          </label>
          <input
            type="number"
            id="prepTime"
            value={recipe.prepTime}
            onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700">
            Cook Time (min)
          </label>
          <input
            type="number"
            id="cookTime"
            value={recipe.cookTime}
            onChange={(e) => setRecipe({ ...recipe, cookTime: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="servings" className="block text-sm font-medium text-gray-700">
            Servings
          </label>
          <input
            type="number"
            id="servings"
            value={recipe.servings}
            onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Difficulty</label>
        <div className="mt-2 flex gap-4">
          {difficultyOptions.map((level) => (
            <label key={level} className="inline-flex items-center">
              <input
                type="radio"
                name="difficulty"
                checked={recipe.difficulty === level}
                onChange={() => setRecipe({ ...recipe, difficulty: level })}
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        <div className="mt-2 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Ingredient"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                required
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                required
                className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <select
                value={ingredient.unit}
                onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {unitOptions.map((unit) => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
          >
            + Add Ingredient
          </button>
        </div>
      </div>

      {/* Steps */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Steps</label>
        <div className="mt-2 space-y-2">
          {recipe.steps.map((step, index) => (
            <div key={index} className="flex gap-2">
              <span className="mt-2">{index + 1}.</span>
              <textarea
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                required
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows={2}
              />
              <button
                type="button"
                onClick={() => removeStep(index)}
                className="text-red-500 hover:text-red-700 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
          >
            + Add Step
          </button>
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Recipe Image</label>
        <input
          type="file"
          onChange={(e) => {
            // Handle image upload logic here
            // You'll need to implement this based on your storage solution
          }}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : buttonText}
        </button>
      </div>
    </form>
  );
}