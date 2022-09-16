import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Banner from './components/Banner';
import Br from './components/Br';
import Store from './components/Store';
import Sns from './components/Sns';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <Banner />
      <Routes>
        <Route path='/' element={<Br />} />
      </Routes>
      <Store />
      <Sns />
      <Footer />
    </>
  );
}

export default App;
