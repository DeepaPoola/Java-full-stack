import React from 'react'

import { Link } from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link to="/home" className="navbar-brand">React Router-Dom 5</Link>
             <div className="ml-auto">
                 <ul className="navbar-nav">
                  
                   <li className="nav-list">
                    <Link to="/message" className="nav-link">Message</Link>
                
                   </li>
                 <li className="nav-list">
                    <Link to="/product" className="nav-link">Product</Link>
                
                   </li>
                 
                   
                 </ul>
             </div>
        </nav>
        
        
    }
}
export default Navbar;