import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../images/brand/oweis.png'
import { CSSTransition, Transition } from 'react-transition-group';

import './Navbar.scss';

import NavbarMobile from './NavbarMobile';
import NavItems from './NavItems'
import DropdownMenu from './DropdownMenu'

const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => scroll.scrollToTop();

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  }

  let listClass = ['nav'];
  if(scrollNav){
    listClass = [...listClass, ' scroll-nav'];
  }

  let mobileMenu = ['nav-mobile'];
  if(isOpen){
    mobileMenu = [...mobileMenu, ' is-open'];
    listClass = [...listClass, ' nav-mobile-bg'];
  }

  return (
    <>
      <nav className={listClass.join(' ')}>
        <div className="navbar-container">
          <LinkRouter to="/" className="nav-logo" onClick={toggleHome}>
            <div className="nav-logo-container">
              <img src={Logo} className="nav-logo-img" alt="logo" />
            </div>
          </LinkRouter>
          
          <Transition in={isOpen} timeout={300}>
            <div className="mobile-icon" onClick={toggle}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </Transition>
          
          <ul className="nav-menu">
            <NavItems to="about" onClick={toggle} name="About" />
            <NavItems to="discover" onClick={toggle} name="Discover" />
            <NavItems to="services" onClick={toggle} name="Services" />
            <NavItems to="contact" onClick={toggle} name="Contact" />
            <NavItems name="Categories" arrowIcon >
              <DropdownMenu />
            </NavItems>
            <nav className="nav-btn">
              <LinkRouter to="/login" className="nav-btn-link"><BiLogIn className="right-icons" /> Sign In</LinkRouter>
            </nav>
          </ul>
        </div>

        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="is-mobile"
          unmountOnExit
        >
          <div className={mobileMenu.join(' ')}>
            <NavbarMobile toggle={toggle} />
          </div>
        </CSSTransition>
      </nav>
    </>
  )
}

export default Navbar;