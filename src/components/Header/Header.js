import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/quiz' className='nav-link'>Test Quiz</Link>
                <Link to='/tutorial' className='nav-link'>Tutorial</Link>
                <Link to='/login' className='nav-link'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;