import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/'>Shop</Link >{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src="data:image/png;base64,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" alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar
