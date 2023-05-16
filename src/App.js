import './App.css';

import { Route, Router, Routes } from "react-router-dom";

import BookmarkPage from "./pages/Bookmark-page";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/Main-page";
import ProductListPage from "./pages/ProductList-page";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/products" element={<BookmarkPage/>}/>
          <Route path="/bookmark" element={<ProductListPage/>}/>
        </Routes>
      </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
