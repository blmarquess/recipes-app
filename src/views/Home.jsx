import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutPage from '../components/assets/LayoutPage';
import DisplayCards from '../components/DisplayCards';
// import DisplayCategory from '../components/DisplayCategory';
import usePageTitle from '../utils/usePageTitle';
import { getDataApi } from '../utils/tools';
import { SearchDataAPI, SearchCategory } from '../redux/actions';

export default function Home() {
  const [recipeList, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const dispatch = useDispatch();
  const pageTitle = usePageTitle();
  const rota = useLocation().pathname.replace('/', '').split('/')[0];

  useEffect(() => {
    const setDataState = (dados) => setList(dados);
    const setDataCategory = (dados) => setCategoryList(dados);
    console.log('<-- LoopEffects');
    // console.log('receitas', recipeList, 'categorias', categoryList);

    const initPage = async () => {
      if (recipeList.length < 1) {
        getDataApi(rota, 'all').then((response) => {
          setDataState(response);
          dispatch(SearchDataAPI(response));
        });
      }
      if (categoryList.length < 1) {
        getDataApi(rota, 'categorias').then((response) => {
          setDataCategory(response);
          dispatch(SearchCategory(response));
        });
      }
    };
    initPage();
    // console.log('recipe', recipeList, 'category', categoryList);
  }, [rota, recipeList, categoryList, dispatch]);

  return (
    <LayoutPage>
      <Header title={ pageTitle } />
      { console.log(recipeList.meals.length === 1) }
      {recipeList.meals.length === 0 ? <DisplayCards { ...recipeList } /> : ''}
      {/* {categoryList.length === 1 && <DisplayCategory { ...categoryList } />} */}
      <Footer />
    </LayoutPage>);
}
