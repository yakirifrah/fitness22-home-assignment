import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { memo } from 'react';

const RecipeItem = ({ recipe, onEdit, onDelete }) => (
	<Card sx={{ marginBottom: 2 }}>
		<CardContent>
			<Typography variant="h5" component="div">
				{recipe.title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				<strong>Ingredients:</strong> {recipe.ingredients}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				<strong>Steps:</strong> {recipe.steps}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" color="primary" onClick={() => onEdit(recipe)}>
				Edit
			</Button>
			<Button size="small" color="error" onClick={() => onDelete(recipe.id)}>
				Delete
			</Button>
		</CardActions>
	</Card>
);

export default memo(RecipeItem);
