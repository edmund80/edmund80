import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse
} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import MHBDipsLogo from '../app/assets/img/logo.jpg';

function Header() {
  const [menuopen, setMenuOpen] = useState(false)
  return (
    <div className='Navbar'>
      <Navbar dark sticky='top' expand='md'>
          <NavbarBrand className='ms-5' href='/'>
            <img src={MHBDipsLogo} alt="mhb dips logo" />
          </NavbarBrand>

          <NavbarToggler onClick={() => setMenuOpen(!menuopen)}/>
          <Collapse isOpen={menuopen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  <i className='fa fa-home fa-lg' /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/products'>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/about'>
                  <i className='fa fa-info fa-lg' /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/contact'>
                  <i className='fa fa-address-card fa-lg' /> Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/cart'>
                  <i className='fa fa-shopping-cart fa-lg' /> Cart
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
}

export default Header;