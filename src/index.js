import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buscar' element={<Search/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/contacto' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
