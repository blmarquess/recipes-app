import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutPage from '../components/assets/LayoutPage';
import DisplayCards from '../components/DisplayCards';
import DisplayCategory from '../components/DisplayCategory';
import usePageTitle from '../utils/usePageTitle';

export default function Home() {
  const pageTitle = usePageTitle();

  return (
    <LayoutPage>
      <Header title={ pageTitle } />

      <DisplayCategory />
      <DisplayCards />

      <Footer />
    </LayoutPage>);
}
