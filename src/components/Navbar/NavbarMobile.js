import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import { AiFillCrown, AiFillTrophy, AiTwotoneBug, AiFillApple, AiTwotoneTrophy } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'

import NavItems from './NavItems'
import DropdownMenu from './DropdownMenu'

const NavbarMobile = ({ toggle }) => {
  return (
    <>
      <div className="mobile-wrapper">
        <div className="mobile-menu">
          <LinkScroll to="about" onClick={toggle} className="mobile-menu-link"><AiFillApple className="right-icons" /> About</LinkScroll>
          <LinkScroll to="discover" onClick={toggle} className="mobile-menu-link"><AiFillTrophy className="right-icons" />Discover</LinkScroll>
          <LinkScroll to="services" onClick={toggle} className="mobile-menu-link"><AiTwotoneBug className="right-icons" />Services</LinkScroll>
          <LinkScroll to="contact" onClick={toggle} className="mobile-menu-link"><AiFillCrown className="right-icons" /> Contact</LinkScroll>
          <NavItems name="Categories" leftIcon={<AiTwotoneTrophy className="right-icons" />} arrowIcon >
            <DropdownMenu />
          </NavItems>
          <LinkRouter to="/login" className="sign-in"><BiLogIn className="right-icons" /> Sign In</LinkRouter>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
