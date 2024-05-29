import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../Store/CartSlice/CartSlice';
import Offers from '../Images/Offers.jpg';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Cart() {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
    };
   
    return (
        <>
            <Navbar />
            <div>
                
                {cartProducts.map((item) => (
                    <div key={item._id}>
                        <h1>{item.title}</h1>
                        <img src={item.imgurl} alt='' className='w-50'/>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                       
                        <button className='btn bg-danger' onClick={() => deleteCart(item)}>Delete</button>
                    </div>
                ))}
                

            </div>
            <Footer />
        </>
    );
}

export default Cart;
