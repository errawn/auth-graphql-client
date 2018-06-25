import React, { Component } from 'react'
import {
	Button,
	ControlLabel,
	FormControl,
	FormGroup,
} from 'react-bootstrap'
import { Mutation } from 'react-apollo'

import Alert from './common/Alert'
import SIGN_UP from '../mutations/signup_mutation'

class Signup extends Component {

	state = {
		email: 'ed@gmail.com',
		password: 'password'
	}

	render() {
		return (
			<Mutation mutation={SIGN_UP}>
			{(signup, { loading, error, data }) => {
				return (
					<div>
						{ error && <Alert type="danger" message="Something went wrong" /> }

						<form onSubmit={(e) => {
							e.preventDefault()
							const { email, password } = this.state
							signup({ variables: { email, password } })
						}}>
							<FormGroup role="form" controlId="email">
								<ControlLabel>Email address: </ControlLabel>
								<FormControl
								  type="text"
								  value={this.state.email}
								  onChange={(e) => this.setState({ email: e.target.value})}
								/>
							</FormGroup>
							<FormGroup role="form" controlId="password">
								<ControlLabel>Password: </ControlLabel>
								<FormControl
								  type="password"
								  value={this.state.password}
								  onChange={(e) => this.setState({ password: e.target.value})}
								/>
							</FormGroup>
							<Button type="submit">Sign Up</Button>
						</form>
						{ loading && <p>Loading...</p> }
					</div>
				)
			}}
			</Mutation>
		)
	}
}


export default Signup