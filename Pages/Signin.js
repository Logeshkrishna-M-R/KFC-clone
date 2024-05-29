import React from 'react';
import KFC from "../Images/KFC.svg"
import {useState} from 'react'
import {Link} from 'react-router-dom'
const Counter=()=>{
    const [count,setCount]=useState(0);

    const incre=()=>{
setCount(count+1)
    }
    const decre=()=>{
        setCount(count-1)
    }
    return (
        <> 
        <p>Count:{count}</p>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
        </>
    )
    }

    export default Counter;

// function Signin(){
    
//     return (
//         < >
//         <div className='container text-center mt-5'>
//             <p>Sign In / Sign up</p>
//             <img src={KFC} alt="..."></img>  
//             <br></br>
//             <h2>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h2>
//             <div className="card mt-5 ">
//             <div className="card-body">
//             <h5 className="card-title">SignUp</h5> <br></br>
//             <h6 className="card-subtitle mb-2 text-body-secondary ms-4 ">E-mail:    
//             <input type="text" placeholder='Enter your email' className='emailinp' required></input></h6>
//             <br></br>
//             <h6 className="card-subtitle mb-2 text-body-secondary ">Password:
//             <input type="password" placeholder='Enter you password' className='pass' required></input> </h6>
//           <p>    <br></br> <button className='btn bg-danger rounded-pill'>SIGNIN</button>
                   
//                   <Link className="nav-link ms-3" to="/login"><p>Already have an account!</p></Link></p>
//   </div>
// </div>
//          </div>

        
//         </>
//     )
// }

// export default Signin;