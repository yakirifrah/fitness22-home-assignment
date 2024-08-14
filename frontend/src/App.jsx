import { useState, useCallback } from 'react';
import { Container, Typography, Box } from '@mui/material';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import useRecipes from './hooks/useRecipes';
import './styles/App.css';

function App() {
	const { recipes, loading, addRecipe, editRecipe, removeRecipe } = useRecipes();
	const [selectedRecipe, setSelectedRecipe] = useState(null);

   const handleAddOrEdit = useCallback(
			(recipe) => {
				if (selectedRecipe) {
					editRecipe(selectedRecipe.id, recipe);
				} else {
					addRecipe(recipe);
				}
			},
			[selectedRecipe, addRecipe, editRecipe],
		);

		const handleEdit = useCallback((recipe) => {
			setSelectedRecipe(recipe);
		}, []);

		const clearSelection = useCallback(() => {
			setSelectedRecipe(null);
		}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<Container>
			<Box sx={{ textAlign: 'center', my: 4 }}>
				<Typography variant="h3">Recipe Management</Typography>
			</Box>
			<RecipeForm onSubmit={handleAddOrEdit} selectedRecipe={selectedRecipe} clearSelection={clearSelection} />
			<RecipeList recipes={recipes} onEdit={handleEdit} onDelete={removeRecipe} />
		</Container>
	);
}

export default App;
