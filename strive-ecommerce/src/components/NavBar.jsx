import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link to={"/"} className='text-navigation nav-link'>Home</Link>
    <Link to={"/backoffice/"} className='text-navigation nav-link'>BackOffice</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
         );
    }
}
 
export default NavBar;