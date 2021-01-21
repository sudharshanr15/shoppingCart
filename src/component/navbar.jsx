import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
                <h1><Link to="/">KeepShopping</Link></h1>
                <Link to="/cart">Cart</Link>
            </React.Fragment>
        )
    }
}

export default Navbar;