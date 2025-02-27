import Advert from "./components/Advert";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductGrid from "./components/ProductCard";
import Footer from "./components/Footer";

function App () {
  return(
    <div className="">
      <Header/>
      <Banner/>
      <ProductGrid/>
      <Advert/>
      <Footer/>
    </div>
  )
}

export default App;