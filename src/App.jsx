import React from 'react'

import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import Home from '../Component/Home/Home'
import Men from '../Component/Men/Men'
import Women from '../Component/Women/Women'
import Child from '../Component/Children/Child'
import Cart from '../Component/Cart/Cart'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>

   
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/men" element={<Men/>}></Route>
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/child" element={<Child/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter> 
     
    </>
  )
}

export default App