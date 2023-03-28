import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import {Provider} from 'react-redux'
import {store} from './store'



class App extends React.Component{
   render(){
   return <>
   <Provider store={store}>
   <Router>
   <Navbar/>
   
   <Routes>
      <Route path="/user" element={<User/>}/>
      
      
      
   </Routes>
   </Router>
   </Provider>
   </>
   }
}

export default App