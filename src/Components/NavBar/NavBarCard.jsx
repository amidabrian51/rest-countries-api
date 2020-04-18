import React from 'react';
import './NavBarCardStyles.css';


export const NavBarCard = ({moonMode, darkMode, handlechange}) => (
    <nav className="navbar-items">
    <h1 className="header">Where in the World</h1>
    <div className="moon-end">
        <button onClick={handlechange}>
            <i className={moonMode }></i>
        </button>
        <h2>{ darkMode }</h2>
    </div>
</nav>
   
)