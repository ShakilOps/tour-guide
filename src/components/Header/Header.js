import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../Image/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar bg="transparent" expand="lg" className="navStyle">
      <Navbar.Brand className = "logo"><img className="imgLogo" src={logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form>
          <input type="search" placeholder="Search your destination" className="search" />
      </Form>
      <Nav className="mr-auto menuName">
        <ul className = "ul">
          <li><Link to ="/news">News</Link></li>
          <li><Link to ="/destination">Destination</Link></li>
          <li><Link to ="/blog">Blog</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to ="/login">Login</Link></li>
        </ul>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;