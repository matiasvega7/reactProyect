import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar' ;
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tipos-de-plantas" element={<ItemListContainer greeting="" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

