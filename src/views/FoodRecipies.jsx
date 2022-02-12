import React from 'react';
import { useLocation } from 'react-router-dom';
import RecipesProgress from '../components/RecipesProgress';

export default function FoodRecipies() {
  const id = useLocation().pathname;
  const rota = id.split('/')[1];
  const recipeId = id.split('/')[2];

  return (<RecipesProgress id={ recipeId } rota={ rota } />);
}
