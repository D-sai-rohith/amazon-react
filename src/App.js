import SecondaryNav from "../src/components/SecondaryNav"
import Navbar from "../src/components/Navbar"
import Footer from "./components/Footer";
import { Routes,Route } from "react-router";
import Products from "./components/Products";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Account from "./components/Account";
import ProductsNew from "./components/ProductsNew";
import { useState } from "react";

function App() {
  const [number,setCount] = useState(0)
  const setNumber = () =>{

    setCount(number+1)
  }
  return (
    <div className="App">
      <header className="App-header">
     
       
    {/* <Slider/>
    <BodyMain/> */}
   
    <BrowserRouter>
    <Navbar number={number}/> 
       <SecondaryNav/>
    <Routes>
      <Route path="/account" element={<Account/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products-new" element={<ProductsNew setNumber={setNumber}/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart setCount={setCount}/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
      </header>
    </div>
  );
}

export default App;
