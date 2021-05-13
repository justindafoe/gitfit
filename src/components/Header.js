import React from 'react';
import './Header.css';
import blackandredinstagram from '../images/blackandredinstagram.png';

function Header() {
    return (
        <div className="Header">
          <a href="http://www.instagram.com/grit_f.i.t" target="_blank"><img className="instagram" src={blackandredinstagram} /></a>
        </div>
    )
}

export default Header;