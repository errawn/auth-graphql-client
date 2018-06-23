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
          <NavItem>
            <Link to="/signup">Sign Up</Link>
          </NavItem>
          <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>
              <Link to="/profile">My Profile</Link>
            </MenuItem>
            <MenuItem eventKey={3.2}>
              <Link to="/blogs">My Blogs</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}


export default Header