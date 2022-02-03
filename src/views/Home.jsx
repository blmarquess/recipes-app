import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/assets/Layout';
import DisplayCards from '../components/DisplayCards';
import usePageTitle from '../utils/usePageTitle';

export default function Home() {
  const state = useSelector((store) => store.searchdata);
  const pageTitle = usePageTitle();

  return (
    <Layout>
      <Header title={ pageTitle } />
      { state.data.length > 1 && <DisplayCards />}
      <Footer />
    </Layout>);
}
