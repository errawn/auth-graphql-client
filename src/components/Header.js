import React, { Component } from 'react'
import { Nav, MenuItem, Navbar, NavItem, NavDropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

import { checkAuth } from '../services/auth'

class Header extends Component {
 
  onLogoutClick() {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Simple Auth</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          { !checkAuth() ? (
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>) : null
          }
          { !checkAuth() ? (
            <NavItem>
              <Link to="/signup">Sign Up</Link>
            </NavItem>
          ) : null }
         
          { checkAuth() ? (
            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>
                <Link to="/profile">My Profile</Link>
              </MenuItem>
              <MenuItem eventKey={3.2}>
                <Link to="/blogs">My Blogs</Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4} onClick={() => this.onLogoutClick()}>Logout</MenuItem>
            </NavDropdown>
          ) : null }
        </Nav>
      </Navbar>
    )
  }
}


export default withRouter(Header)