import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends React.Component {
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
			<form onSubmit={this.onSubmit.bind(this)}>
				<label>Email</label>
				<input type="text" onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} />
				<br/>
				<label>Password</label>
				<input type="password" onChange={(e) => this.setState({ password: e.target.value})} value={this.state.password} />
				<button type="submit" >Login</button>
			</form>
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

export default graphql(mutation)(App)