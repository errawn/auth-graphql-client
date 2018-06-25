import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { checkAuth } from './services/auth'

import App from './App'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import PostCreate from './components/PostCreate'
import Profile from './components/Profile'
import Signup from './components/Signup'

// PrivateRoute Hoc
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => 
	  checkAuth() ? (
	  	<Component {...rest} />
	  ) : (
	    <Redirect to={{ pathname: "/login" }} />
	  )
	}
	/>
)

const routes = () => {
	return (
		<Router>
			<div>
				<Header />
				<App>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<PrivateRoute path="/profile" component={Profile} />
						<PrivateRoute path="/posts/new" component={PostCreate} />
						<Route component={() => <p>Page Not found</p>} />
					</Switch>
				</App>
			</div>
		</Router>
	)
}

export default routes

