import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DisplayCards from '../components/DisplayCards';

export default function Drinks() {
  return (
    <div>
      <Header title="Drinks" />
      <DisplayCards />
      <Footer />
    </div>);
}
