import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesProgress from '../components/RecipesProgress';

export default function FoodRecipies() {
  const id = useLocation().pathname;
  const rota = id.split('/')[1];
  const recipeId = id.split('/')[2];
  return (
    <div>
      <Header title="DrinksRecipies" />
      <RecipesProgress id={ recipeId } rota={ rota } />
      <Footer />
    </div>
  );
}
