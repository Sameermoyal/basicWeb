import React from 'react'
// import "./Home.css"

import { Link } from 'react-router-dom'

function Home() {
  return (
   <>

    
    
     <div >
        <div  >
            <div  ><Link to={"/men"}><h1  className="text-7xl text-blue-700 bg-red-500" >MENS FASHIONS</h1></Link></div>
            <div  >
                <div className="card">
                    <img src="/men/m7.png" alt=""/>
                    <img src="/men/m8.png" alt=""/>
                    <img src="/men/m4.png" alt=""/>
                    <img src="/men/m2.png" alt=""/>
                </div>
            </div>
        </div>
        <div  >
            <div  ><Link to={"/women"}><h1>WOMEN FASHIONS</h1></Link></div>
            <div  >
                <div  >
                    <img src="/women/w4.png" alt=""/>
                    <img src="/women/w3.png" alt=""/>
                    <img src="/women/w8.png" alt=""/>
                    <img src="/women/w1.png" alt=""/>
                </div>
            </div>
        </div>
        <div  >
            <div  ><Link to={"/child"}><h1>CHILD FASHIONS</h1></Link></div>
            <div  >
                <div  >
                    <img src="/kids/k5.png" alt=""/>
                    <img src="/kids/k7.png" alt=""/>
                    <img src="/kids/k8.png" alt=""/>
                    <img src="/kids/k4.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
   
   

   </>
  )
}

export default Home