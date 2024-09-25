import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { Search } from '@mui/icons-material'
import Dropdown from 'react-bootstrap/Dropdown'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import india from "../assets/icons/flag.svg"
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { Modal, ModalFooter } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
export const Navbar = ({number}) => {
  const [show, setShow] = useState(false)
  const [phoneNo,setPhoneNo] = useState()
  const [password,setPassword] = useState()
  const [showSign,setSign] = useState(false)
  const [clicked,setClicked] = useState(false)
  const [message,setMessage] = useState('')
  const [redirect,setRedirect] = useState(false)
  const [showlogin,setShowLogin] = useState(localStorage.getItem('user_id'));
  const [details,setDetails] = useState({Uname:'',
    email:'',
    password:null,
    firstName:'',
    lastName:'',
    address:'',
    phoneNumber:null
  })


 
  const Login = async ()=>{
    setClicked(true);
    const formData = new FormData()
    formData.append('email',phoneNo)
    formData.append('password',password)
    const response =await axios.post('https://amazon.indianhackerslab.com/Select_user.php',formData)
    if(response){
      if(response.data){
        if(response.data.status==="success")
        { 
          // console.log(response.data.data)
          localStorage.setItem("user_id",response.data.data.user_id)
          setShow(false)
          setRedirect(true)
          // setShowLogin(false)
          
          if(window.location.pathname==="/"){
            window.location.replace("/account")
          }
          else{
           
            window.location.replace(window.location.pathname); 
          }
         
        }
        else{
          setMessage("Invalid Credentials PLease check your email and password")
        }
      }
    }
   
    setClicked(false)
  }
  const signUp = async () => {
      
    //   setDetails(previous =>({
    //     ...previous,password:123
    //   }))
    const formData = new FormData()
    formData.append('username',details.Uname)
    formData.append('email',details.email)
    formData.append('password',details.password)
    formData.append('first_name',details.firstName)
    formData.append('last_name',details.lastName)
    formData.append('address',details.address)
    formData.append('phone_number',details.phoneNumber)
    const response = await axios.post('https://amazon.indianhackerslab.com/insertuserdata.php',formData)
    if(response)
    {
      console.log(response)
    }
    setSign(false)
  }
  return (
    <div>
        <Modal show={redirect} onHide={()=>setRedirect(false)}>
      
        <Modal.Body>
       <p>You are Being redirected to your account.......</p>
        </Modal.Body>
        
      </Modal>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
            Login
        </Modal.Header>
        <Modal.Body>
        <div className='form-group'>
            <label for='num'>Email </label>
            <input type='email' className='form-control' id='num' placeholder='Enter Email' onChange={(e)=>{setPhoneNo(e.target.value)}}/>
            <label for='pass'>Password</label>
            <input type='password' className='form-control' id='pass' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
         </div>
         <p className='text-danger'>{message}</p>
        </Modal.Body>
        <ModalFooter>
          <button className='form-control btn btn-primary w-25' onClick={()=>{Login()}}>{clicked?<CircularProgress size={20} color='inherit'/>:"Login"}</button>
        </ModalFooter>
      </Modal>
      <Modal show={showSign} onHide={()=>setSign(false)}>
        <Modal.Header closeButton>
            SignUp
        </Modal.Header>
        <Modal.Body>
        <div className='form-group'>
            <label >UserName</label>
            <input type='text' className='form-control' onChange={(e)=>{setDetails(previous=>({
              ...previous,Uname:e.target.value
            }))}}/>
            <label >Email</label>
            <input type='eamil' className='form-control' onChange={(e)=>{setDetails(previous=>({
              ...previous,email:e.target.value
            }))}}/>
            <label>Password</label>
            <input type='password' className='form-control'onChange={(e)=>{setDetails(previous=>({
              ...previous,password:e.target.value
            }))}}/>
            <label >FirstName</label>
            <input type='text' className='form-control'onChange={(e)=>{setDetails(previous=>({
              ...previous,firstName:e.target.value
            }))}}/>
            <label >LastName</label>
            <input type='text' className='form-control' onChange={(e)=>{setDetails(previous=>({
              ...previous,lastName:e.target.value
            }))}}/>
            <label >Address</label>
            <input type='text' className='form-control'
            onChange={(e)=>{setDetails(previous=>({
              ...previous,address:e.target.value
            }))}}/>
            <label >Phone Number</label>
            <input type='number' className='form-control' onChange={(e)=>{setDetails(previous=>({
              ...previous,phoneNumber:e.target.value
            }))}}/>
         </div>
        </Modal.Body>
        <ModalFooter>
          <button className='form-control btn btn-primary w-25' onClick={()=>{signUp()}}>Signup</button>
        </ModalFooter>
      </Modal>
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
        <Dropdown.Item href="#/action-2">Your Orders</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Your Recommendations</Dropdown.Item>
        <Dropdown.Item href="#">Your Wishlist</Dropdown.Item>
        <Dropdown.Item href="#">Your prime membership</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
            <div class="text-white d-lg-block">
              
                {showlogin?<></>:
                 <>
                  <button className='btn btn-warning me-3' onClick={()=>setShow(true)}>Login</button>
                  <button className='btn btn-success' onClick={()=>{setSign(true)}}>Signup</button></>}
                  
            </div>
            <div class="text-white d-flex ">
                
                <Link to={'/cart'} className='text-decoration-none me-2'><a className='text-light me-2 text-decoration-none'>{number}</a><AddShoppingCartTwoToneIcon/>Cart</Link>
            </div>
        </div>
    </div>
  )
}
export default Navbar