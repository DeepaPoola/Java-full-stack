import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import {store} from './store'
import Product from './Product/Product'


class App extends React.Component{
   render(){
   return <>
   <Provider store={store}>
   <Router>
   <Navbar/>
   
   <Routes>
      <Route path="/message" element={<Message/>}/>
      <Route path="/product" element={<Product/>}/>
      
      
   </Routes>
   </Router>
   </Provider>
   </>
   }
}

export default App