import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookmarkPage from "../src/pages/Bookmark-page";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import MainPage from "../src/pages/Main-page";
import ProductListPage from "../src/pages/ProductList-page";
import React from "react";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/products" element={<BookmarkPage/>}/>
          <Route path="/bookmark" element={<ProductListPage/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
