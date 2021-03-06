import React, { Component } from 'react'
import { Nav, MenuItem, Navbar, NavItem, NavDropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

import { checkAuth } from '../services/auth'
import client from '../client'

class Header extends Component {
 
  onLogoutClick() {
    localStorage.removeItem('token')
    client.resetStore() //reset apollo store
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
                <Link to="/posts">My Blogs</Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4} onClick={() => this.onLogoutClick()}>Logout</MenuItem>
            </NavDropdown>
          ) : null }

          { checkAuth() ? (
            <NavItem>
              <Link to="/posts">My Posts</Link>
            </NavItem>) : null
          }

          { checkAuth() ? (
            <NavItem>
              <Link to="/posts/new">New Post</Link>
            </NavItem>) : null
          }
        </Nav>
      </Navbar>
    )
  }
}


export default withRouter(Header)