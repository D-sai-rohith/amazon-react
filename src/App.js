import SecondaryNav from "../src/components/SecondaryNav"
import Navbar from "../src/components/Navbar"
import Slider from "./components/Slider";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <Navbar/> 
       <SecondaryNav/>
    <Slider/>
    <BodyMain/>
    <Footer/>
      </header>
    </div>
  );
}

export default App;
