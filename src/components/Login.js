import React from 'react'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import {  
	Alert,
	Button,
	ControlLabel, 
	Form,  
	FormControl,
	FormGroup,
} from 'react-bootstrap'

import { checkAuth } from '../services/auth'
import LOG_IN from '../mutations/login_mutation'

class Login extends React.Component {
	state = {
		email: 'edrren@gmail.com',
		password: 'password'
	}

	render() {
		if (checkAuth())
			return <Redirect to="/profile" />

		return (
			<Mutation mutation={LOG_IN}>
			{(login, { loading, error, data }) => {
				if (data) {
					const { signin: { token } } = data
					localStorage.setItem('token', token)
					return <Redirect to='/profile' />
				}
				return (
					<div>
						<Form
							onSubmit={(e) => {
								e.preventDefault()
							 	const { email, password } = this.state
							 	login({ variables: { email, password } })
							}}
						>
							<FormGroup role="form" controlId="email">
								<ControlLabel>Email address:</ControlLabel>
								<FormControl
								 type="text"
								 value={this.state.email}
								 onChange={(e) => this.setState({ email: e.target.value})}
								/>
							</FormGroup>
							<FormGroup role="form" controlId="password">
								<ControlLabel>Password:</ControlLabel>
								<FormControl
								 type="password"
								 value={this.state.password}
								 onChange={(e) => this.setState({ password: e.target.value})}
								/>
							</FormGroup>
							<Button type="submit">Sign In</Button>
						</Form>
						{ loading && <p>loading....</p> }
						{ error && (
							<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
				        		<h4>Oh snap! You got an error!</h4>
				        		<p>{error.message}</p>
				        	</Alert>
				        ) }
					</div>

				)
			}}
			</Mutation>
		)
	}
}

export default Login