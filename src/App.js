import SecondaryNav from "../src/components/SecondaryNav"
import Navbar from "../src/components/Navbar"
import Slider from "./components/Slider";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";
import { Routes,Route } from "react-router";
import Products from "./components/Products";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       
    {/* <Slider/>
    <BodyMain/> */}
   
    <BrowserRouter>
    <Navbar/> 
       <SecondaryNav/>
    <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
      </header>
    </div>
  );
}

export default App;
