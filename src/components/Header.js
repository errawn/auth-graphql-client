import React, { Component } from 'react'
import { Nav, MenuItem, Navbar, NavItem, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Simple Auth</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/signup">Sign Up</Link>
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}


export default Header