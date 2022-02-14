import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext } from '../context/store';
import { hasRecipeInProgress, readLocalData } from '../utils/storageTools';
import { getDataApi } from '../utils/tools';
import { setAtProgress } from '../context/action';

export default function RecipesProgress({ id, rota }) {
  const dispatch = useContext(DispatchContext);
  const selector = rota === 'foods' ? 'meals' : 'drinks';
  React.useLayoutEffect(() => {
    console.log('Effect');
    const inProgressDB = readLocalData('inProgressRecipes');
    console.log(inProgressDB);
    const hasInProgress = async () => {
      if (inProgressDB === null) {
        const newData = await getDataApi(rota, 'id', id).then((res) => res);
        dispatch(setAtProgress([...newData[selector]]));
      }
      if (inProgressDB && hasRecipeInProgress(id)) {
        dispatch(setAtProgress(inProgressDB));
      }
    };
    hasInProgress();
  }, [dispatch, id, rota, selector]);

  return (
    <div className="mt-36">
      <h2>
        Estamos na rota:
        {' '}
        {rota}
        {' '}
        com o id:
        {id}
      </h2>
    </div>
  );
}

RecipesProgress.propTypes = { id: PropTypes.string, rota: PropTypes.string }.isRequired;
