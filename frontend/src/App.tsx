import Advert from "./components/Advert";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductGrid from "./components/ProductCard";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/modal/Register'
import UserHomePage from "./pages/UserHomePage";
import ProductPage from "./pages/ProductPage";
import SellerPage from "./pages/SellerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/userpage" element={<UserHomePage />} />
        <Route path="/Product" element={<ProductPage/>} />
        <Route path="/sellerpage" element={<SellerPage/>} />
        <Route path="/" element={
          <div>
            <Header />
            <Banner />
            <ProductGrid />
            <Advert />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App;