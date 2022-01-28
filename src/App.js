import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Home from './views/Home';
import Drinks from './views/Drinks';
import Profile from './views/Profile';
import Explore from './views/Explore';
import ExploreFoods from './views/ExploreFoods';
import ExploreDrinks from './views/ExploreDrinks';
import Nationalities from './views/Nationalities';
import FavoriteRecipes from './views/FavoriteRecipes';
import DrinksDetails from './views/DrinksDetails';
import FoodDetails from './views/FoodDetails';
import FoodRecipies from './views/FoodRecipies';
import DrinksRecipies from './views/DrinksRecipies';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Home } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } /> 
      <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/drinks/:id" component={ DrinksDetails } />
      <Route exact path="/foods/:id" component={ FoodDetails } /> 
      <Route exact path="/foods/:id/in-progress" component={ FoodRecipies } />
      <Route exact path="/drnks/:id/in-progress" component={ DrinksRecipies } />
    </Switch>
  );
}

export default App;
