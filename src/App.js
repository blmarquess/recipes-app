import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Drinks from './views/Drinks';
import FoodDetails from './views/FoodDetails';
import DrinksDetails from './views/DrinksDetails';
import DrinksRecipies from './views/DrinksRecipies';
import Explore from './views/Explore';
import ExploreFoods from './views/ExploreFoods';
import ExploreDrinks from './views/ExploreDrinks';
import DrinksIngredients from './views/DrinksIngredients';
import FoodsNationalities from './views/Nationalities';
import DoneRecipes from './views/DoneRecipes';
import FavoriteRecipes from './views/FavoriteRecipes';
import FoodRecipies from './views/FoodRecipies';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Home } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route path="/foods/:id" render={ (props) => <FoodDetails { ...props } /> } />
      <Route path="/drinks/:id" render={ (props) => <DrinksDetails { ...props } /> } />
      <Route path="/foods/:id/in-progress" component={ FoodRecipies } />
      <Route path="/drnks/:id/in-progress" component={ DrinksRecipies } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ FoodsNationalities } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
