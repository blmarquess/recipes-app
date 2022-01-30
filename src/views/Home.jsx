import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const title = 'Foods';

export default function Home() {
  return (
    <div>
      <Header title={ title } />
      <Footer />
    </div>);
}
