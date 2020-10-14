import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { SiLinewebtoon, SiSemanticweb } from 'react-icons/si'
import { GiPlantsAndAnimals } from 'react-icons/gi'
import { CSSTransition } from 'react-transition-group';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#!" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="menu-link">
          {props.leftIcon && <span className="icon-button-left">{props.leftIcon}</span>}
          {props.children}
        </span>
        {props.rightIcon && <span className="icon-button-right">{props.rightIcon}</span>}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div className="menu-header">
            <h4>Categories</h4>
          </div>
          <DropdownItem 
            leftIcon={<SiLinewebtoon className="icon" />}>
            Web Design
          </DropdownItem>
          <DropdownItem
            leftIcon={<SiSemanticweb className="icon" />}
            rightIcon={<AiOutlineArrowRight className="icon" />}
            goToMenu="skills">
            Skills
          </DropdownItem>
          <DropdownItem
            leftIcon={<GiPlantsAndAnimals className="icon" />}
            rightIcon={<AiOutlineArrowRight className="icon" />}
            goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'skills'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div className="menu-header">
            <h4>{activeMenu}</h4>
            <AiOutlineArrowLeft onClick={() => setActiveMenu('main')} className="right-icons"/>
          </div>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>HTML/CSS</DropdownItem>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>Node.js</DropdownItem>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>PHP</DropdownItem>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>React</DropdownItem>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>Angular</DropdownItem>
          <DropdownItem leftIcon={<SiLinewebtoon className="icon" />}>Vue</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div className="menu-header">
            <h4>{activeMenu}</h4>
            <AiOutlineArrowLeft onClick={() => setActiveMenu('main')} className="right-icons"/>
          </div>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🐕 Dog</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🦁 Lion</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🐔 Chicken</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🐟 Fish</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🐅 Tiger</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🐘 Elephant</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🐜 Ant</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🦒 Giraffe</DropdownItem>
          <DropdownItem leftIcon={<GiPlantsAndAnimals className="icon" />}>🦁 Lion</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;