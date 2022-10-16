import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Header } from './components/index.js';

export const SearchContext = React.createContext<any>({});

function App() {
  const [searchPizza, setSearchPizza] = React.useState('');

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchPizza, setSearchPizza }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
