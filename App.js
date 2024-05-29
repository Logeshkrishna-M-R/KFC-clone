import logo from './logo.svg';
import './App.css';
// import Navbar from './Component/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import Cart from './Pages/Cart';
import DealsAndOffer from './Pages/DealsandOffer';
import UploadItems from './Admin/Upload';
import Updateitems from './Admin/Update';
import EditItems from './Admin/Edit';
// import Footer from './Component/Footer.js';


function App() {
  return (
  < > 
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/deals' element={<DealsAndOffer/>}></Route>
      <Route path="/" element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin/upload' element={<UploadItems/>}/>
          <Route path='/admin/update' element={<Updateitems/>}/>
          <Route path='/admin/edititems/:id' element={<EditItems />} loader={({ params }) => fetch(`http://localhost:5000/food/${params.id}`)}/>
    </Routes>
    </BrowserRouter>
     
    

    {/* <Footer></Footer> */}

    
  </>

  );
}

export default App;
