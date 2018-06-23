import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import {  
	Button,
	ControlLabel, 
	Form,  
	FormControl,
	FormGroup,
} from 'react-bootstrap'

class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state = { email: 'edrren@gmail.com', password: 'password' }
	}

	onSubmit = async (e) => {
		e.preventDefault()
		const { email, password } = this.state

		const response = await this.props.mutate({
			variables: { email, password }
		})

		const { data: { signin: { token } } } = response
		console.log(token)
	}

	render() {
		return (
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