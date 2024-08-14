const Recipe = require('../models/recipeModel');

const getRecipes = (req, res) => {
  const recipes = Recipe.findAll();
  res.json(recipes);
};

const createRecipe = (req, res) => {
  const { title, ingredients, steps } = req.body;
  const newRecipe = Recipe.create({ title, ingredients, steps });
  res.status(201).json(newRecipe);
};

const updateRecipe = (req, res) => {
  const { id } = req.params;
  const { title, ingredients, steps } = req.body;
  const updatedRecipe = Recipe.update(id, { title, ingredients, steps });
  if (updatedRecipe) {
    res.json(updatedRecipe);
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
};

const deleteRecipe = (req, res) => {
  const { id } = req.params;
  Recipe.delete(id);
  res.status(204).send();
};

module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
};