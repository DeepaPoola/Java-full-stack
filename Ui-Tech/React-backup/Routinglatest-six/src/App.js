import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'


import Home from './Dummy/Home'
import About from './Dummy/About'
import Contact from './Dummy/Contact'
class App extends React.Component{
   render(){
   return <>
   <Router>
   <Navbar/>
   
   <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </Router>
   </>
   }
}

export default App