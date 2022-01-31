import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/assets/layout';

const title = 'Foods';

export default function Home() {
  return (
    <Layout>
      <Header title={ title } />
      <Footer />
    </Layout>);
}
