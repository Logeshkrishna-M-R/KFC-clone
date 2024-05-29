import React from 'react';
import Burgers from '../Images/Burgers.jpg';


function Deals(){
    return (
        <div className='Ftr bg-black text-white'>
        <div id="footer-1">
      <div className="container">
        <h4 className='text-start'>OFFERS AND DEALS</h4>
        <h4 class='text-end'>View all deals</h4>
    </div>
<section className="kfc-card">
   <div className="container"> 
    <div className="row">
        <div className="col-lg-3">
            <div className="card">
                <img src={Burgers} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" class="btn btn-primary">APPLY</a>
                </div>
              </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={Burgers} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="" >view details</a>
                  <a href="#" className="btn btn-primary">APPLY</a>
                </div>
              </div> 
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={Burgers} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" class="btn btn-primary">APPLY</a>
                </div>
              </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={Burgers} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" class="btn btn-primary">APPLY</a>
                </div>
              </div>
        </div>
    </div>
   </div> 
    <br></br>
    <br></br>
    
 </section>
</div>
</div>
    )
}
export default Deals;