import { useState, useEffect } from 'react';
import AppProvider from './ContextProvider';
import { AppContext } from './ContextProvider';

import './css/style.css';

import UserHeader from './components/UserHeader';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

function App() {
  // TODO refactorizacion para que app provea productos y filtros de header a a cardcontainer

  return (
    // <div className="App">
    <AppProvider>
      <div className="App">
        <UserHeader />
        <Header />
        <SearchBar />
        <CardContainer />
        <Footer />
      </div>
    </AppProvider>
    // </div>
  );
}

export default App;
