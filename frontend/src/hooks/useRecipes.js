import { useState, useEffect } from 'react';
import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from '../services/recipeService';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await getRecipes();
      setRecipes(response.data);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRecipe = async (recipe) => {
    try {
      await createRecipe(recipe);
      fetchRecipes();
    } catch (error) {
      console.error('Failed to add recipe:', error);
    }
  };

  const editRecipe = async (id, updatedRecipe) => {
    try {
      await updateRecipe(id, updatedRecipe);
      fetchRecipes();
    } catch (error) {
      console.error('Failed to update recipe:', error);
    }
  };

  const removeRecipe = async (id) => {
    try {
      await deleteRecipe(id);
      fetchRecipes();
    } catch (error) {
      console.error('Failed to delete recipe:', error);
    }
  };

  return { recipes, loading, addRecipe, editRecipe, removeRecipe };
};

export default useRecipes;
