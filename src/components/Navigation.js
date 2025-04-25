import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className='nav'>
            
    <NavLink to ='/'>
        <li>Home</li>
    </NavLink>
    <NavLink to ='sec'>
        <li>Coups de Coeur</li>
    </NavLink>
        </ul>
    );
};

export default Navigation;