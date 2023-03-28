import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
//import User from './User/User'
//import {Provider} from 'react-redux'
//import {store} from './store'
import Message from './Message/Message'
import Registration  from './Form/Registration'
import User from './User/User'
import Picture from './Picture/Picture'

class App extends React.Component{
   render(){
   return <>
  
   <Router>
   <Navbar/>
   
   <Routes>
      <Route path="/message" element={<Message/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/picture" element={<Picture/>}/>
      
   </Routes>
   </Router>
   
   </>
   }
}

export default App