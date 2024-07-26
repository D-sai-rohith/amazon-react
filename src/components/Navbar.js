import React from 'react'
import logo from "../assets/images/logo.png"
import { Search } from '@mui/icons-material'
import Dropdown from 'react-bootstrap/Dropdown'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import india from "../assets/icons/flag.svg"
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
export const Navbar = () => {
  return (
    <div>
          <div class="navbar primary-navbar d-flex flex-nowrap bg-dark container-fluid align-center">
            <img class="logo " src={logo}/>
            <div class="d-flex flex-row">
        <LocationOnIcon className="text-light mt-lg-3 mt-sm-1"/>
                <div class="text-white ms-2 d-none d-lg-block">
                    <p class="mb-1">Hello</p>
                <h6>Select Your Address</h6>
                </div>
            </div>
            <div class="d-block d-md-none ms-sm-5">
            <Search className="text-light"/>
            </div>
            <div class="d-flex col-5 bg-white logo rounded d-none d-md-flex">

            <Dropdown className="bg-white rounded-start">
      <Dropdown.Toggle  id="dropdown-basic" className="bg-white text-dark border-0">
        All
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">All Catagories</Dropdown.Item>
        <Dropdown.Item href="#">Alexa skills</Dropdown.Item>
        <Dropdown.Item href="#">Amazon Goods</Dropdown.Item>
      
        <Dropdown.Item href="#/action-1">Men's</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Women's</Dropdown.Item>
        <Dropdown.Item href="#/action-3">kids</Dropdown.Item>
        <Dropdown.Item href="#">Appliances</Dropdown.Item>
        <Dropdown.Item href="#">Electronics</Dropdown.Item>
        <Dropdown.Item href="#">Computers</Dropdown.Item>
        <Dropdown.Item href="#">Mobile phones</Dropdown.Item>
      
      
      
      
      </Dropdown.Menu>
    </Dropdown>
                
                <input type="text" class="form-control d-none d-md-block" placeholder="Search Amazon.in"/>
                <button class="bg-warning h-100 rounded-end border-0 d-none d-md-block"><Search className="bg-warning rounded-end bg-secondary"/> </button>
            </div>
            <div class="d-flex">
                
                <img src={india} class="logo d-none d-md-block"/>
                
                <Dropdown className="ms-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent border-0">
        EN
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tamil</Dropdown.Item>
        <Dropdown.Item href="#">Bengali</Dropdown.Item>
        <Dropdown.Item href="#">Kannada</Dropdown.Item>
        <Dropdown.Item href="#">Odia</Dropdown.Item>
        <Dropdown.Item href="#">Marati</Dropdown.Item>
      
      
      
      
      </Dropdown.Menu>
    </Dropdown>

            </div>
            
            <Dropdown className=" ms-2">
      <Dropdown.Toggle  id="dropdown-basic" className="bg-transparent border-0">
      Hello sign in <br/><b>Accounts & Lists</b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Your Account</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Your Orders</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Your Recommendations</Dropdown.Item>
        <Dropdown.Item href="#">Your Wishlist</Dropdown.Item>
        <Dropdown.Item href="#">Your prime membership</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
            <div class="text-white d-none d-lg-block">
                <p class="mb-1">Returns</p>
                <h6><b>& Orders</b></h6>
            </div>
            <div class="text-white d-flex ">
                <AddShoppingCartTwoToneIcon/>
                <h6 class="d-none d-md-block adj1">Cart</h6>
            </div>
        </div>
    </div>
  )
}
export default Navbar