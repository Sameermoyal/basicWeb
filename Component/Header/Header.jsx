import React from 'react'
// import "./Header.css"
import {Link} from "react-router-dom";
function Header() {
  return (
    <>
       <div className="navbar">
            <div><h1>FASHIONS.com</h1></div>
            <div className="home"> <Link to={"/"}>HOME</Link></div>
            <div className="men"> <Link to={"/men"}>MEN's</Link>  </div>
            <div className="women"><Link to={"/women"}>WOMEN's</Link></div>
            <div className="child"><Link to={"/child"}>CHILD</Link></div>
            <div className="cart"><Link to={"/cart"}>CART</Link></div>
            <div className="buy"><Link to={"/buy"} >BUY </Link></div>
        </div>
    </>
  )
}

export default Header