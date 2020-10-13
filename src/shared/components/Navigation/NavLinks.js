import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = () => {
    const auth = useContext(AuthContext);

    return <ul className="nav-links">
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/dashboard" exact>Dashboard</NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth">Authenticate</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}>Logout</button>
                </li>
            )}
    </ul>
};

export default NavLinks;