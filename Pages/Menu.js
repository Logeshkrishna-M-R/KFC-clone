import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Periperi from '../Menumap/Periperi';
import Value from '../Menumap/Value';
import Buckets from '../Menumap/Buckets';
import Chickenroll from '../Menumap/Chickenrolls';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Stripes from '../Images/KFCStripes.svg';
import { addToCart, deleteFromCart } from '../Store/CartSlice/CartSlice';
import './Pages.css';
import Form from './Form';

function Menu() {
  
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/all-foods')
          .then((res) => res.json())
          .then((data) => setFoodItems(data));
  }, []);

  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  return (
    <section className="menu">
      <Navbar />
      <div className="container-fluid">
        <div className="bg-dark text-white text-center p-3">
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
          <button className="rounded-pill bg-danger ms-2">Start Order</button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <a href="# "><img src={Stripes} alt="KFC Stripes" /></a>
            <div className="log row position-sticky top-0 bg-white w-100">
              <h3>KFC MENU</h3>
              <ul>
                <li><a href="#periperichicken">PERI PERI CHICKEN</a></li>
                <li><a href="#Value">VALUE SNACKERS</a></li>
                <li><a href="#Rolls">CHICKEN ROLLS</a></li>
                <li><a href="#Buckets">CHICKEN BUCKETS</a></li>
                <li>BIRYANI BUCKETS</li>
                <li>BOX MEALS</li>
                <li>BURGERS</li>
                <li>SNACKS</li>
                <li>BEVERAGES</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <h3 id="periperichicken">PERI PERI CHICKEN</h3>
            <div className="row">
              {Periperi.map((item) => (
                <div className="col-lg-6 mb-3 mt-2" >
                  <div className="card" key={item.id}>
                    <img src={item.img} className="img-fluid" />
                    <div className="card-body">
                      <h3 className="card-title text-center">{item.title}</h3>
                      <p className="card-text">{item.price}</p>
                      <p className="card-text">{item.desc}</p>
                      {cartProducts.find(items => items.id == item.id) ? 
                        <button type="button" className="btn btn-danger" onClick={() => deleteCart(item)}>Remove from cart</button>
                       : 
                        <button type="button" className="btn btn-danger" onClick={() => addCart(item)}>Add to cart</button>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="Value">VALUE SNACKERS</h3>
            <div className="row">
              {Value.map((item) => (
                <div className="col-lg-4 mb-3 mt-2" >
                  <div className="card" key={item.id}>
                    <img src={item.img} className="img-fluid"  />
                    <div className="card-body">
                      <h3 className="card-title text-center">{item.title}</h3>
                      <p className="card-text">{item.price}</p>
                      <p className="card-text">{item.desc}</p>
                      {cartProducts.find(items => items.id == item.id) ? 
                        <button type="button" className="btn btn-danger" onClick={() => {deleteCart(item)}}>Remove from cart</button>
                      : 
                        <button type="button" className="btn btn-danger" onClick={() => {addCart(item)}}>Add to cart</button>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="Rolls">CHICKEN ROLLS</h3>
            <div className="row">
              {Chickenroll.map((item) => (
                <div className="col-lg-4 mb-3 mt-2" >
                  <div className="card" key={item.id}>
                    <img src={item.img} className="img-fluid"  />
                    <div className="card-body">
                      <h3 className="card-title text-center">{item.title}</h3>
                      <p className="card-text">{item.price}</p>
                      <p className="card-text">{item.desc}</p>
                      {cartProducts.find(items => items.id == item.id) ? 
                        <button type="button" className="btn btn-danger" onClick={() => deleteCart(item)}>Remove from cart</button>
                      : 
                        <button type="button" className="btn btn-danger" onClick={() => addCart(item)}>Add to cart</button>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="Buckets">CHICKEN BUCKETS</h3>
            <div className="row">
              {Buckets.map((item) => (
                <div className="col-lg-4 mb-3 mt-2" >
                  <div className="card" key={item.id}>
                    <img src={item.img} className="img-fluid"/>
                    <div className="card-body">
                      <h3 className="card-title text-center">{item.title}</h3>
                      <p className="card-text">{item.price}</p>
                      <p className="card-text">{item.desc}</p>
                      {cartProducts.find(items => items.id == item.id) ? 
                        <button type="button" className="btn btn-danger" onClick={() => deleteCart(item)}>Remove from cart</button>
                       : 
                        <button type="button" className="btn btn-danger" onClick={() => addCart(item)}>Add to cart</button>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="Buckets">New BUCKETS</h3>
            <div className="row">
              {foodItems.map((item) => (
                <div className="col-lg-4 mb-3 mt-2" >
                  <div className="card" key={item._id}>
                    <img src={item.imgurl} className="img-fluid"/>
                    <div className="card-body">
                      <h3 className="card-title text-center">{item.foodname}</h3>
                      <p className="card-text">{item.price}</p>
                      <p className="card-text">{item.description}</p>
                      {cartProducts.find(items => items._id === item._id) ? 
                        <button type="button" className="btn btn-danger" onClick={() => deleteCart(item)}>Remove from cart</button>
                       : 
                        <button type="button" className="btn btn-danger" onClick={() => addCart(item)}>Add to cart</button>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Form/>
      <Footer />
    </section>
  );
}

export default Menu;
