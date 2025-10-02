import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json"; // ✅ import directly from src

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // ✅ load data straight into state
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🍲 Recipe Sharing Platform
      </h1>

      {/* Responsive grid for recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden hover:scale-105 transform duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
