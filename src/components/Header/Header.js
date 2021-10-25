import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom'

function Header() {

    var [showNav, setShowNav] = useState(false);
    var [isScroll, setIsScroll] = useState(false);
    var [dark, setDark] = useState(false);

    var prevScrollpos = window.pageYOffset;

    function onToggleNav() {
        setShowNav(!showNav);
    }

    function handleScroll() {
        setShowNav(false);
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setIsScroll(false)
        } else {
            setIsScroll(true)
        }
        currentScrollPos === 0 ? setDark(false) : setDark(true);
        prevScrollpos = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })


    return (

        <div id="header" className={`${isScroll ? 'hide' : 'show'} + ${dark ? 'dark' : ''}`}>
            <div className="title">
                <h3><Link exact={'true'} to="/">Travel</Link></h3>
            </div>
            <div className="nav">
                <ul className={showNav ? 'nav-list on' : 'nav-list off'}>
                    <li className="nav-item"><NavLink exact={true} to="/" activeClassName='active'>Trang chủ</NavLink></li>
                    <li className="nav-item"><NavLink to="/Contact" activeClassName='active'>Liên hệ</NavLink></li>
                    <li className="nav-item"><NavLink to="/Explore" activeClassName='active'>Khám phá</NavLink></li>
                    <li className="nav-item"><NavLink to="/Booking" activeClassName='active'>Đặt vé</NavLink></li>
                </ul>
            </div>
            <div className='nav-toggle' onClick={onToggleNav}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Header;
