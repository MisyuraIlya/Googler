import React from 'react';
import { Link } from "react-router-dom";
import Search from './Search';
import Links from './Links';
const logo = new URL('../../public/images/logo.png', import.meta.url)
const Navbar = () => {
    return (
        <div className='navbar'>
            
            <div className='logo'>
                <Link to="/">
                    <img src={logo}/>
                </Link>
                <Search/>
            </div>
            <hr/>

        </div>
    );
};

export default Navbar;