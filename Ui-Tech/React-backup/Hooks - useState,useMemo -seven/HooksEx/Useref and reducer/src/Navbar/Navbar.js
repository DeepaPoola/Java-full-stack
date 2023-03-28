import React from 'react'

import { Link } from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link to="/home" className="navbar-brand">Redux Reducer</Link>
             <div className="ml-auto">
                 <ul className="navbar-nav">
                  
                   
                 <li className="nav-list">
                    <Link to="/message" className="nav-link">Message</Link>
                
                   </li>
                   <li className="nav-list">
                    <Link to="/registration" className="nav-link">Registration</Link>
                
                   </li>
                   <li className="nav-list">
                    <Link to="/user" className="nav-link">User</Link>
                
                   </li>
                   <li className="nav-list">
                    <Link to="/picture" className="nav-link">Picture</Link>
                
                   </li>
                 
                   
                 </ul>
             </div>
        </nav>
        
        
    }
}
export default Navbar;