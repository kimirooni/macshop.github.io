import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import CartModal from './components/CartModal';
import Cart from "./components/Cart"
//import Product from './components/Product';


class App extends Component {
    render() {
        return (
            <React.Fragment>
              <NavBar />
              <Switch>  
              <Route exact path= "/" component={ProductList}/>              
                <Route path= "/details" component={Details}/> 
                <Route path="/cart" component={Cart} />              
                <Route component={Default}/> 
                </Switch>   
                <Modal />   
                <CartModal/>
            </React.Fragment>
        );
    }
}
 
export default App;