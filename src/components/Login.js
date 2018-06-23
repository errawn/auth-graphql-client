import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
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

class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			email: 'edrren@gmail.com', 
			password: 'password',
			errorMsg: false
		}
	}

	onSubmit = async (e) => {
		e.preventDefault()
		const { email, password } = this.state

		try {
			const response = await this.props.mutate({
				variables: { email, password }
			})
			const { data: { signin: { token } } } = response
			this.setState({ errorMsg: false })
			localStorage.setItem('token', token)

			this.props.history.push('/profile')
		} catch(e) {
			this.setState({ errorMsg: true })
			localStorage.removeItem('token')
		}
	}

	render() {
		if (checkAuth())
			return <Redirect to="/profile" />

		return (
			<div>
			{ this.state.errorMsg ? (
				<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
		          <h4>Oh snap! You got an error!</h4>
		          <p>Login Failed. Please provide correct credentials.</p>
	        	</Alert>
			): null}
			<Form onSubmit={this.onSubmit.bind(this)}>
				<FormGroup
					role="form"
					controlId="email"
				>
					<ControlLabel>Email address:</ControlLabel>
					<FormControl
						type="text"
						value={this.state.email}
						onChange={(e) => this.setState({ email: e.target.value})}
					/>
				</FormGroup>
				<FormGroup
					role="form"
					controlId="password"
				>
					<ControlLabel>Password:</ControlLabel>
					<FormControl
						type="password"
						value={this.state.password}
						onChange={(e) => this.setState({ password: e.target.value})}
					/>
				</FormGroup>
				<Button type="submit">Sign In</Button>
			</Form>
			</div>
		)
	}

}

const mutation = gql`
	mutation SignIn($email: String!, $password: String!){
	  signin(email: $email, password: $password) {
	    token
	  }
	}
`;

export default graphql(mutation)(Login)