import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';


const EditRecipeForm = ({ existingRecipe }) => {
const updateRecipe = useRecipeStore((s) => s.updateRecipe);
const [title, setTitle] = useState(existingRecipe.title || '');
const [description, setDescription] = useState(
existingRecipe.description || ''
);
const navigate = useNavigate();


const handleSubmit = (e) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;


updateRecipe({ id: existingRecipe.id, title, description });


// Optionally navigate to the recipe details page (stay here by default)
// navigate(`/recipes/${existingRecipe.id}`);
};


return (
<form onSubmit={handleSubmit}>
    <div>
        <label>
        Title
            <input
            value={title} onChange={(e) => setTitle(e.target.value)} type="text"
            />
        </label>
    </div>
        <div>
            <label>
                Description
            <textarea
            value={description} onChange={(e) => setDescription(e.target.value)}
            />
            </label>
        </div>
    <button type="submit">Save Changes</button>
</form>
);
};


export default EditRecipeForm;