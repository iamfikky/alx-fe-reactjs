import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ multiple errors

  // ✅ validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Please provide at least two ingredients (comma separated).";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const newRecipe = { title, ingredients, steps };
    console.log("Recipe submitted:", newRecipe);

    // Clear fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        ➕ Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="md:flex md:items-center md:gap-4">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0 md:w-1/4">
            Recipe Title
          </label>
          <div className="md:w-3/4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <div className="md:flex md:items-start md:gap-4">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0 md:w-1/4">
            Ingredients
          </label>
          <div className="md:w-3/4">
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Eggs, Cheese, Pasta"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="md:flex md:items-start md:gap-4">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0 md:w-1/4">
            Preparation Steps
          </label>
          <div className="md:w-3/4">
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-400"
              placeholder="Describe the cooking steps..."
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
