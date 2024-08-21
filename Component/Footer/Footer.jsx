import React from 'react'
// import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    
     <div className="footer">
    <div className="home"> <Link to="/">HOME</Link></div>
                
    <div className="cart"><Link to="/cart">CART</Link></div>
    <div className="buy"><Link to="/buy">BUY</Link></div>
    <div className="about"><Link to="/about">ABOUT</Link></div>
    <div className="contact"><Link to="/contact">CONTACT</Link></div>
</div>
    </>
  )
}

export default Footer