import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll'
import { FiArrowDown } from 'react-icons/fi'

const NavItems = ({ children, to, name, leftIcon, arrowIcon }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <li className="nav-items">
      <LinkScroll
        onClick={() => setDropDown(!dropDown)}
        className="nav-link"
        to={to ? to : '#'}
        smooth="true"
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        {leftIcon} {name} {arrowIcon && <FiArrowDown className="left-icons" />}
      </LinkScroll>
      {dropDown && children}
    </li>
  )
}

export default NavItems;