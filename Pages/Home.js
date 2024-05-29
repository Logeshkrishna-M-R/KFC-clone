import React from 'react'
import KFCadv from '../Images/KFCadv.png'
// import './Pages.css'
// import Menu from '../Pages/Menu';
import Burgers from '../Images/Burgers.jpg'
import Deals from '../Pages/Deals.js';
import Footer from '../Component/Footer.js';
import Navbar from '../Component/Navbar';
function Home(){
    return (
        < >

<Navbar></Navbar>
 <div className='container-fluid'>
    <div className='bg-dark text-white text-center p-3 '>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN<button className='rounded-pill bg-danger ms-2'>Start Order</button></div>
 </div>
    <img src={KFCadv} className="container-fluid " alt="..."/>
   

     <div className="container">
          <h1>BROWSE CATEGORIES</h1>
          <div className="line"></div>
     </div>

     <div class="container text-center">
     <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
     <div class="col">  <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
     <div class="col"> <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
     <div class="col"> <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
     <div class="col"> <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
    </div>
    </div>
    <div class="container text-center">
     <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
     <div class="col">  <img src={Burgers} class="img-fluid" alt="..."/> <h1 class="text-center">Burgers</h1></div>
     <div class="col"> <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
     <div class="col"> <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
     <div class="col"> <img src={Burgers} class="img-fluid" alt="..."/><h1 class="text-center">Burgers</h1></div>
    </div>
    </div>
    <Deals></Deals>
    <Footer></Footer>
    
    <></>
        </>
    )
}

export default Home;