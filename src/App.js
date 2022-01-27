import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Home } />
      {/*
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" component={ FoodsDetails } />
      <Route exact path="/drinks/:id" component={ DrinksDetails } />
      <Route exact path="/foods/:id/in-progress" component={ FoodRecipies } />
      <Route exact path="/drnks/:id/in-progress" component={ DrinksRecipies } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ FoodsNationalities } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
    </Switch>
  );
}

export default App;
