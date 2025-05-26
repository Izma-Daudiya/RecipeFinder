import Header from "../components/Header";
import { useState } from "react";

export default function AddRecipe() {
  const categoryOptions = [
    "Breakfast", "Lunch", "Dinner", "Dessert", "Snack",
    "Vegan", "Vegetarian", "Non-Vegetarian", "Gluten-Free"
  ];
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const unitOptions = ["g", "kg", "ml", "l", "tsp", "tbsp", "cup", "pcs"];

  const [recipe, setRecipe] = useState({
    name: "",
    categories: [],
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    ingredients: [{ name: "", quantity: "", unit: "" }],
    steps: [""],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setRecipe((prev) => ({ ...prev, categories: selected }));
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...recipe.ingredients];
    updated[index][field] = value;
    setRecipe((prev) => ({ ...prev, ingredients: updated }));
  };

  const handleStepChange = (index, value) => {
    const updated = [...recipe.steps];
    updated[index] = value;
    setRecipe((prev) => ({ ...prev, steps: updated }));
  };

  const addIngredient = () => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: "", quantity: "", unit: "" }],
    }));
  };

  const removeIngredient = (index) => {
    const updated = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe((prev) => ({ ...prev, ingredients: updated }));
  };

  const addStep = () => {
    setRecipe((prev) => ({ ...prev, steps: [...prev.steps, ""] }));
  };

  const removeStep = (index) => {
    const updated = recipe.steps.filter((_, i) => i !== index);
    setRecipe((prev) => ({ ...prev, steps: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
  };

  return (
    <>
      <Header></Header>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Add New Recipe
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900">Recipe Name</label>
              <input
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>

            {/* Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-900">Categories</label>
              <select
                multiple
                value={recipe.categories}
                onChange={handleCategoryChange}
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              >
                {categoryOptions.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Time, Servings, Difficulty */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">Preparation Time (mins)</label>
                <input
                  type="number"
                  name="prepTime"
                  value={recipe.prepTime}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">Cooking Time (mins)</label>
                <input
                  type="number"
                  name="cookTime"
                  value={recipe.cookTime}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">Servings</label>
                <input
                  type="number"
                  name="servings"
                  value={recipe.servings}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">Difficulty</label>
                <select
                  name="difficulty"
                  value={recipe.difficulty}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                >
                  <option value="">Select</option>
                  {difficultyOptions.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-medium text-gray-900">Ingredients</label>
              {recipe.ingredients.map((ing, i) => (
                <div key={i} className="mt-2 flex space-x-2">
                  <input
                    placeholder="Name"
                    value={ing.name}
                    onChange={(e) => handleIngredientChange(i, "name", e.target.value)}
                    className="w-1/3 rounded-md px-2 py-1 border outline-gray-300 focus:outline-indigo-600"
                  />
                  <input
                    type="number"
                    placeholder="Qty"
                    value={ing.quantity}
                    onChange={(e) => handleIngredientChange(i, "quantity", e.target.value)}
                    className="w-1/4 rounded-md px-2 py-1 border outline-gray-300 focus:outline-indigo-600"
                  />
                  <select
                    value={ing.unit}
                    onChange={(e) => handleIngredientChange(i, "unit", e.target.value)}
                    className="w-1/3 rounded-md px-2 py-1 border outline-gray-300 focus:outline-indigo-600"
                  >
                    <option value="">Unit</option>
                    {unitOptions.map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => removeIngredient(i)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addIngredient}
                className="mt-2 text-sm text-indigo-600"
              >
                + Add Ingredient
              </button>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-medium text-gray-900">Instructions</label>
              {recipe.steps.map((step, i) => (
                <div key={i} className="mt-2 flex items-start space-x-2">
                  <textarea
                    value={step}
                    onChange={(e) => handleStepChange(i, e.target.value)}
                    className="w-full rounded-md px-2 py-1 border outline-gray-300 focus:outline-indigo-600"
                  />
                  <button
                    type="button"
                    onClick={() => removeStep(i)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addStep}
                className="mt-2 text-sm text-indigo-600"
              >
                + Add Step
              </button>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900">Recipe Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setRecipe((prev) => ({ ...prev, image: e.target.files[0] }))}
                className="mt-2 block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:py-1.5 file:px-3 file:text-white hover:file:bg-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-2 focus:outline-indigo-600"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
