import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutPage from '../components/assets/LayoutPage';
import DisplayCards from '../components/DisplayCards';
import usePageTitle from '../utils/usePageTitle';

export default function Home() {
  const state = useSelector((store) => store.searchdata);
  const pageTitle = usePageTitle();

  return (
    <LayoutPage>
      <Header title={ pageTitle } />
      { state.data.length > 1 && <DisplayCards />}
      <Footer />
    </LayoutPage>);
}
