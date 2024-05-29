import React from "react";
import Offers from "../Images/Offers.jpg";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function DealsAndOffer(){
    return(<>
        <div className='container-fluid'>
        <Navbar></Navbar>
    <div className='bg-dark text-white text-center p-3 '>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN<button className='rounded-pill bg-danger ms-2'>Start Order</button></div>
       </div>
       <img src={Offers} className="container-fluid" alt="... "></img> 
       <Footer></Footer>
  </>
    )
}
export default DealsAndOffer;