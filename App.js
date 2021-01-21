import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import  './CSS/Style.css';

import Cover from './Components/Productshown'
import Contact from './Components/Contact Us'
import Homes from "./Components/Homes"
import Details from "./Components/Details"
import Products from "./Components/Products"
import Login from "./Components/Login/Login"
import Register from "./Components/Login/Register"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"


class App extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="App">
            
            <Switch>
                
                <Route path='/' component={Homes} exact/>
                <Route path='/Cover' component={Cover}/>
                <Route path='/Contact' component={Contact}/>
                <Route path='/Details/:id' component={Details}/>
                <Route path='/producto' component={Products}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/product/:id' component={ProductScreen}/>
                <Route path='/cart' component={CartScreen}/>
                
            </Switch>
            <br/>
               {/* <Footer/> */}
            </div>
         );
    }
}
 
export default App;
