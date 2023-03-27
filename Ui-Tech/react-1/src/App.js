import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Message from './HooksEx/Message'
import Counter from './HooksEx/Counter'
import Factorial from './HooksEx/Factorial'

class App extends React.Component{
   render(){
   return <>
   <Router>
   <Navbar/>
   
   <Routes>
      <Route path="/message" element={<Message/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/factorial" element={<Factorial/>}/>
      
   </Routes>
   </Router>
   </>
   }
}

export default App