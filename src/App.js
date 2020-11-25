import React, { useState, useEffect } from 'react';
import AppProvider from "./ContextProvider";
import { AppContext } from "./ContextProvider";

import './css/style.css';

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import CardContainer from "./components/CardContainer"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className="App">
          <Header />
          <SearchBar />
          <CardContainer />
          <Footer />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
