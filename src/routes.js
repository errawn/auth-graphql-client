import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'

const routes = () => {
	return (
		<Router>
			<div>
				<Header />
				<App>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/profile" component={Profile} />
					</Switch>
				</App>
			</div>
		</Router>
	)
}

export default routes

