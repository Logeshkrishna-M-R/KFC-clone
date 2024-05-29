import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import KFC from '../Images/KFC.svg'
import { GiChickenOven } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";


function Navbar(){
  
    return(
        < >
        <div className='container text-center'>
          <br></br>
          <h5><FaLocationDot />Allow location access for local store menu and promos
          <button className='rounded-pill bg-black text-white ms-2'>Set Location</button></h5>
          
        </div><hr></hr>
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-5">
          <Link class="nav-link active" aria-current="page" to="/"><img src={KFC} className='img-fluid' alt='...'></img></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-3" to="/menu">Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-3" to="/deals">Deals</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaRegUser />
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Sigin</a></li>
            
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Login</a></li>
             <li><hr class="dropdown-divider" /></li> 
           </ul>
        </li> */}
      </ul>
      <div className="log d-flex">   
         <li class="nav-item ">
          <Link class="nav-link me-4" to="/signin"><FaUserCircle /> Signin</Link>
        </li>
         <li className=" nav-item me-5">
          <Link className="nav-link" to="/cart"><IoCartSharp/>
 </Link> 
         
        </li>
      </div>
    </div>
   
</nav>


         
        </>
    )
}

export default Navbar;