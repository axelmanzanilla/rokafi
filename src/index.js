import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Information from './pages/Information/Information';
import Else from './pages/Else/Else';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/categorias' element={ <Categories /> } />
        <Route path='/buscar' element={ <Search /> } />
        <Route path='/carrito' element={ <Cart /> } />
        <Route path='/contacto' element={ <Contact /> } />
        <Route path='/perfil' element={ <Profile /> } />
        <Route path='/informacion' element={ <Information /> } />
        <Route path='/:input' element={ <Else /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
