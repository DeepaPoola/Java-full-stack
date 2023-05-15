import {Link} from 'react-router-dom'
let Navbar=()=>{
    return <div className="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link to="#" className="navbar-brand">Navbar</Link>
           <div className="ml-auto">
             <ul className="navbar-nav">
               <li className="nav-list">
                 <Link to="/home" className="nav-link">Home</Link>
               </li>
               <li className="nav-list">
                 <Link to="/login" className="nav-link">Login</Link>
               </li>
               <li className="nav-list">
                 <Link to="/contact" className="nav-link">Contact</Link>
               </li>
               <li className="nav-list">
                 <Link to="/message" className="nav-link">Message</Link>
               </li>
               <li className="nav-list">
                 <Link to="/product" className="nav-link">Product</Link>
               </li>
               
             </ul>

             </div>
           </div>
    
}
export default Navbar