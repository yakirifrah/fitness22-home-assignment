import { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const RecipeForm = ({ onSubmit, selectedRecipe, clearSelection }) => {
	const [title, setTitle] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [steps, setSteps] = useState('');

	useEffect(() => {
		if (selectedRecipe) {
			setTitle(selectedRecipe.title);
			setIngredients(selectedRecipe.ingredients);
			setSteps(selectedRecipe.steps);
		} else {
			clearForm();
		}
	}, [selectedRecipe]);

	const clearForm = () => {
		setTitle('');
		setIngredients('');
		setSteps('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ title, ingredients, steps });
		clearForm();
		clearSelection();
	};

	return (
		<Paper sx={{ padding: 2, marginBottom: 2 }}>
			<Typography variant="h6" gutterBottom>
				{selectedRecipe ? 'Edit Recipe' : 'Add Recipe'}
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Title"
					fullWidth
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					margin="normal"
					required
				/>
				<TextField
					label="Ingredients"
					fullWidth
					value={ingredients}
					onChange={(e) => setIngredients(e.target.value)}
					margin="normal"
					required
				/>
				<TextField
					label="Steps"
					fullWidth
					value={steps}
					onChange={(e) => setSteps(e.target.value)}
					margin="normal"
					multiline
					rows={4}
					required
				/>
				<Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
					{selectedRecipe ? 'Update Recipe' : 'Add Recipe'}
				</Button>
			</form>
		</Paper>
	);
};

export default RecipeForm;
