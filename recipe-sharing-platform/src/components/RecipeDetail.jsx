import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selected);
  }, [id]);

  if (!recipe) return <p className="p-6 text-center">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        {recipe.title}
      </h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients?.map((ingredient, idx) => (
            <li key={idx} className="text-gray-600">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetail;
