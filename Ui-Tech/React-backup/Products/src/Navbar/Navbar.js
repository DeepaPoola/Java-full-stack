import React from 'react'

import { Link } from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link to="/home" className="navbar-brand">Redux Reducer</Link>
             <div className="ml-auto">
                 <ul className="navbar-nav">
                  
                   
                 <li className="nav-list">
                    <Link to="/products" className="nav-link">Products</Link>
                
                   </li>
                   <li className="nav-list">
                    <Link to="/create" className="nav-link">Create</Link>
                
                   </li>
                   <li className="nav-list">
                    <Link to="/admin" className="nav-link">Admin</Link>
                
                   </li>
                   
                 
                   
                 </ul>
             </div>
        </nav>
        
        
    }
}
export default Navbar;