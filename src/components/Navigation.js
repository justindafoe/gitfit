import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="Navigation">
            <Link class="nav-link" to="/">HOME</Link>
            <Link class="nav-link" to="/about">ABOUT</Link>
            <Link class="nav-link" to="/programs">PROGRAMS</Link>
            <Link class="nav-link" to="/contact">CONTACT</Link>  
            <a href="https://gritfit.store/" target="_blank"> MERCH</a>   
        </div>
    )
}

export default withRouter(Navigation);