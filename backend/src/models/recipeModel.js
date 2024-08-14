let recipes = [];

class Recipe {
  static findAll() {
    return recipes;
  }

  static findById(id) {
    return recipes.find(recipe => recipe.id === parseInt(id));
  }

  static create({ title, ingredients, steps }) {
    const newRecipe = {
      id: recipes.length + 1,
      title,
      ingredients,
      steps
    };
    recipes.push(newRecipe);
    return newRecipe;
  }

  static update(id, { title, ingredients, steps }) {
    const recipe = recipes.find(r => r.id === parseInt(id));
    if (recipe) {
      recipe.title = title;
      recipe.ingredients = ingredients;
      recipe.steps = steps;
      return recipe;
    }
    return null;
  }

  static delete(id) {
    recipes = recipes.filter(r => r.id !== parseInt(id));
  }
}

module.exports = Recipe;