import { useState, useMemo } from 'react';
import RecipeItem from './RecipeItem';
import { TextField, Typography } from '@mui/material';
import { debounce } from 'lodash';

const RecipeList = ({ recipes, onEdit, onDelete }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = useMemo(() => debounce((query) => setSearchQuery(query), 300), []);

	const filteredRecipes = recipes.filter(
		(recipe) =>
			recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div>
			<TextField
				label="Search recipes..."
				variant="outlined"
				fullWidth
				value={searchQuery}
				onChange={(e) => handleSearch(e.target.value)}
				sx={{ marginBottom: 2 }}
			/>
			{filteredRecipes
				.sort((a, b) => a.title.localeCompare(b.title))
				.map((recipe) => (
					<RecipeItem key={recipe.id} recipe={recipe} onEdit={onEdit} onDelete={onDelete} />
				))}
			{filteredRecipes.length === 0 && (
				<Typography variant="body1" color="text.secondary">
					No recipes found.
				</Typography>
			)}
		</div>
	);
};

export default RecipeList;
