import React from 'react';

import kfcLogo from  '../Images/kfcLogo.svg'
import googleplay  from '../Images/googleplay.svg';
import apple from '../Images/apple.svg';
import { FaLocationDot } from "react-icons/fa6";
 

function Footer(){
    return(
 <div className='ftr bg-black text-white'>
    <section className="footer-2 ">
    <div className="container">
    <br></br>
        <div className="row">
           <div className="col-sm-8">
            <div className="row">
                <div className="col-sm-2">
                    <img src={kfcLogo} alt=""/>
                </div>
                <div className="col-sm-2">
                    <p>Legal</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                    <p>Caution Notice</p>
                </div>
                <div className="col-sm-2">
                    <p>KFC India</p>
                    <p>About KFC</p>
                    <p>KFC care</p>
                    <p>Careers</p>
                    <p>Our Golden spot</p>
                </div>
                <div className="col-sm-2">
                    <p>KFC Food</p>
                    <p>Menu</p>
                    <p>Order Lookup</p> 
                    <p>Gift Card</p>
                    <p>Nutrition & Allergen</p>
                </div>
                <div className="col-sm-2">
                    <p>Support</p>
                    <p>Get Help</p>
                    <p>Contact Us</p>
                    <p>KFC Feedback</p>
                    <p>Privacy Policy</p> 
                </div>
            </div>
           </div>
           <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-4">
                    <p><FaLocationDot />Find a KFC</p>
                </div>
                <div className="col-sm-4">
                    <img src={googleplay} alt=""/>
                </div>
                <div className="col-sm-4">
                    <img src={apple} alt=""/>
                </div>
            </div>
           </div>
        </div>
    </div>
</section>

<section className="footer-3">
    <div className="container">
        <div className="row">
            <div className="col-lg-9">
                <div className="row">
                    <div className="col-sm-9">
                        <p>Copyright © KFC Corporation 2024 All Rights Reserved</p>
                    </div>   
                </div>
            </div>
            <div className="col-lg-3">
                <div className="row">
                     <div className="col-sm-1">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="col-sm-1">
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="col-sm-1">
                        <i className="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
   
</section>
   
     
  </div> 
    )
}
export default Footer;