import { useState } from "react";
import Header from "../components/Header";

const categories = [
  "Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Vegan", "Vegetarian", "Gluten-Free"
];

const difficultyLevels = ["Easy", "Medium", "Hard"];

const units = ["g", "kg", "ml", "l", "tsp", "tbsp", "cup", "pcs"];

export default function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    categories: [],
    cookingTime: "",
    prepTime: "",
    servings: "",
    difficulty: "",
    ingredients: [{ name: "", quantity: "", unit: "" }],
    steps: [""],
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setRecipe({ ...recipe, categories: selected });
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...recipe.ingredients];
    updated[index][field] = value;
    setRecipe({ ...recipe, ingredients: updated });
  };

  const handleStepChange = (index, value) => {
    const updated = [...recipe.steps];
    updated[index] = value;
    setRecipe({ ...recipe, steps: updated });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { name: "", quantity: "", unit: "" }],
    });
  };

  const addStep = () => {
    setRecipe({ ...recipe, steps: [...recipe.steps, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
    // You can handle form submission or Firebase upload here
  };

  return (
    <>
        <Header></Header>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Add New Recipe
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Name */}
            <div>
                <label className="block text-sm font-medium text-gray-900">Recipe Name</label>
                <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                />
            </div>

            {/* Categories (Multi-select) */}
            <div>
                <label className="block text-sm font-medium text-gray-900">Categories</label>
                <select
                multiple
                value={recipe.categories}
                onChange={handleCategoryChange}
                className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                >
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl (Cmd on Mac) to select multiple</p>
            </div>

            {/* Time and Servings */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                <label className="block text-sm font-medium text-gray-900">Preparation Time (mins)</label>
                <input
                    type="number"
                    name="prepTime"
                    value={recipe.prepTime}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-900">Cooking Time (mins)</label>
                <input
                    type="number"
                    name="cookingTime"
                    value={recipe.cookingTime}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-900">Servings</label>
                <input
                    type="number"
                    name="servings"
                    value={recipe.servings}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                />
                </div>
            </div>

            {/* Difficulty */}
            <div>
                <label className="block text-sm font-medium text-gray-900">Difficulty</label>
                <select
                name="difficulty"
                value={recipe.difficulty}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                >
                <option value="">Select Difficulty</option>
                {difficultyLevels.map((d) => (
                    <option key={d} value={d}>{d}</option>
                ))}
                </select>
            </div>

            {/* Ingredients */}
            <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Ingredients</label>
                {recipe.ingredients.map((ing, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                    <input
                    type="text"
                    placeholder="Ingredient Name"
                    value={ing.name}
                    onChange={(e) => handleIngredientChange(idx, "name", e.target.value)}
                    className="w-1/2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                    />
                    <input
                    type="number"
                    placeholder="Quantity"
                    value={ing.quantity}
                    onChange={(e) => handleIngredientChange(idx, "quantity", e.target.value)}
                    className="w-1/4 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                    />
                    <select
                    value={ing.unit}
                    onChange={(e) => handleIngredientChange(idx, "unit", e.target.value)}
                    className="w-1/4 rounded-md border-gray-300 px-2 py-2 shadow-sm focus:outline-indigo-600"
                    >
                    <option value="">Unit</option>
                    {units.map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                    </select>
                </div>
                ))}
                <button type="button" onClick={addIngredient} className="text-indigo-600 text-sm font-semibold hover:underline">
                + Add Ingredient
                </button>
            </div>

            {/* Steps */}
            <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Instructions</label>
                {recipe.steps.map((step, idx) => (
                <textarea
                    key={idx}
                    placeholder={`Step ${idx + 1}`}
                    value={step}
                    onChange={(e) => handleStepChange(idx, e.target.value)}
                    className="w-full mb-2 rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                />
                ))}
                <button type="button" onClick={addStep} className="text-indigo-600 text-sm font-semibold hover:underline">
                + Add Step
                </button>
            </div>

            {/* Image Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-900">Upload Image</label>
                <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2"
                />
            </div>

            {/* Submit */}
            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-indigo-600"
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
