import React from 'react';
import KFC from "../Images/KFC.svg"
import {Link} from 'react-router-dom'
function Signin(){
    return (
        < >
        <div className='container text-center mt-5'>
            <p>Login In</p>
            <img src={KFC} alt="..."></img>  
            <br></br>
            <h2>LET’S LOGIN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h2>
            <div className="card mt-5">
            <div className="card-body">
            <h5 className="card-title">Login</h5> <br></br>
            <h6 className="card-subtitle mb-2 text-body-secondary ms-4">E-mail:    
            <input type="text" placeholder='Enter your email' className='emailinp'></input></h6>
            <br></br>
            <h6 className="card-subtitle mb-2 text-body-secondary ">Password:
            <input type="text" placeholder='Enter you password' className='pass'></input> </h6>
          <p> <br></br>
           <button className='btn bg-danger '>LOGIN</button>
           
            <Link className="nav-link ms-3" to="/signin"><p>Create an account!</p></Link>
           </p>
          
  </div>
</div>
         </div>
        </>
    )
}

export default Signin;