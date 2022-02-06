import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutPage from '../components/assets/LayoutPage';
import DisplayCards from '../components/DisplayCards';
// import DisplayCategory from '../components/DisplayCategory';
import usePageTitle from '../utils/usePageTitle';

export default function Home() {
  const pageTitle = usePageTitle();

  // const rota = useLocation().pathname.replace('/', '').split('/')[0];

  return (
    <LayoutPage>
      <Header title={ pageTitle } />

      <DisplayCards />
      {/* {categoryList.length === 1 && <DisplayCategory />} */}

      <Footer />
    </LayoutPage>);
}
