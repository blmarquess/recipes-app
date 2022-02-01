import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Drinks from './views/Drinks';
import Details from './views/Details';
import DrinksRecipies from './views/DrinksRecipies';
import Explore from './views/Explore';
import ExploreFoods from './views/ExploreFoods';
import ExploreDrinks from './views/ExploreDrinks';
import DrinksIngredients from './views/DrinksIngredients';
import Nationalities from './views/Nationalities';
import DoneRecipes from './views/DoneRecipes';
import FavoriteRecipes from './views/FavoriteRecipes';
import FoodRecipies from './views/FoodRecipies';
import NotFound from './views/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="404" component={ NotFound } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Home } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route path="/foods/:id" render={ (props) => <Details { ...props } /> } />
      <Route path="/drinks/:id" render={ (props) => <Details { ...props } /> } />
      <Route path="/foods/:id/in-progress" component={ FoodRecipies } />
      <Route path="/drnks/:id/in-progress" component={ DrinksRecipies } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
