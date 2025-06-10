import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/CartContext'
import Promociones from './components/Promociones';
import CartPage from './components/CartPage';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer greeting="Todas las plantas" />} />
          <Route path="/tipos-de-plantas/:categoriaId" element={<ItemListContainer greeting="Filtrando por categoría" />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={2000} theme="colored" />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
