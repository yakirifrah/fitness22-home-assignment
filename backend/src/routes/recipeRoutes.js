const express = require('express');
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const router = express.Router();

router.get('/recipes', getRecipes);
router.post('/recipes', createRecipe);
router.put('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);

module.exports = router;