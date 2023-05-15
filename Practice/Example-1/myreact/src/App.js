import Login from './Login/Login'
import Navbar from './Navbar/Navbar'
import Home from './Login/Home'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import {store} from './store'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ContactApp from './Contact/ContactApp'
import Product from './Product/Product'
let App=()=>{
    return <>
      <Provider store={store}>
    <Router>
            <Navbar/>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/contact" component={ContactApp}/>
            <Route path="/message" component={Message}/>
            <Route path="/product" component={Product}/>
            
        </Switch>
   
    </Router>
    </Provider>
    </>
}
export default App
