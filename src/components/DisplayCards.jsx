import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

export default function DisplayCards() {
  const dataToDisplay = useSelector((state) => state.searchdata.data);
  const rota = useHistory();
  console.log('Fisrt:', dataToDisplay);

  const renderOrRouter = () => {
    if (dataToDisplay === null) {
      console.log('Fisrt IF:', dataToDisplay);
      return global.alert('"Sorry, we haven"t found any recipes for these filters.');
    }
    if (dataToDisplay.meals && dataToDisplay.meals.length === 1) {
      console.log('Second IF:', dataToDisplay);
      return rota.push(dataToDisplay.meals[0].idMeal);
    }
  };
  renderOrRouter();

  return (
    <div>
      {dataToDisplay.meals && dataToDisplay.meals.length === 1
        ? rota.push(dataToDisplay.meals.idMeal)
        : dataToDisplay.meals.map((item, index) => <Card key={ index } { ...item } />) }
    </div>
  );
}
