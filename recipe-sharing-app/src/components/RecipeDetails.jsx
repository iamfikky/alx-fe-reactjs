import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = () => {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((state) =>
state.recipes.find((r) => r.id === recipeId)
);
const navigate = useNavigate();


if (!recipe) {
return (
<div>
    <h2>Recipe not found</h2>
    <button onClick={() => navigate(-1)}>Go Back</button>
</div>
);
}


return (
<div>
    <h1>{recipe.title}</h1>
    <p>{recipe.description}</p>
        <div style={{ marginTop: '1rem' }}>
            <h3>Edit this recipe</h3>
            <EditRecipeForm existingRecipe={recipe} />
        </div>
        <div style={{ marginTop: '1rem' }}>
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>

        <div style={{ marginTop: '1rem' }}>
            <Link to="/">← Back to list</Link>
        </div>
</div>
);
};

export default RecipeDetails;