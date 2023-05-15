import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
//import User from './User/User'
//import {Provider} from 'react-redux'
//import {store} from './store'
import ProductList from './Products/ProductList'
import ProductAdmin from './Products/ProductAdmin'
import CreateProduct from './Products/CreateProduct'
import UpdateProduct from './Products/UpdateProduct'
class App extends React.Component{
   render(){
   return <>
  
   <Router>
   <Navbar/>
   
   <Routes>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/create" element={<CreateProduct/>}/>
      <Route path="/admin" element={<ProductAdmin/>}/>
      <Route path="/update" element={<UpdateProduct/>}/>
      
   </Routes>
   </Router>
   
   </>
   }
}

export default App