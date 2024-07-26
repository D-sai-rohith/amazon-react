import React from 'react'

import { Menu } from '@mui/icons-material'

export const SecondaryNav = () => {
  return (
    <div> <nav class="navbar secondary-navbar d-none d-sm-block text-white bg-secondary navbar-expand">
    <ul class="navbar-nav">
        <li class="nav-item ">
           <Menu/>
        </li>
        <li class="nav-item ">
            <a class="nav-link text-white" href="#">All</a>
        </li>
        <li class="nav-item .d-none">
          <a class="nav-link text-white d-none d-lg-block" href="#">Amazon mini tv</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white d-none d-lg-block" href="#">Best sellers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">sell</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white  d-none d-lg-block" href="#">Today's deals</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white " href="#">Mobiles</a>
        </li>
        <li class="nav-item ">
            <a class="nav-link text-white  d-none d-lg-block" href="#">New releases</a>
        </li>
        <li class="nav-item ">
            <a class="nav-link text-white  d-none d-lg-block" href="#">Customer service</a>
          </li>
        <li class="nav-item dropdown">
            <a class="nav-link  d-sm-block d-none text-white text-white dropdown-toggle" href="#">
            Prime
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link  text-white d-none  d-md-block " href="#">Electronics</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white d-none d-lg-block " href="#">Gift ideas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white d-none d-md-block" href="#">Kitchen</a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-none d-sm-block text-white ms-5" href="#" >New Launches from mobiles & more| shop now</a>
        </li>
    </ul>
</nav> </div>
  )
}
export default SecondaryNav