import React, { Component } from 'react'
import {
	Button,
	ControlLabel,
	Form,
	FormControl,
	FormGroup
} from 'react-bootstrap'
import { Mutation } from 'react-apollo'

import POST_CREATE from '../mutations/post_create_mutation'

class PostCreate extends Component {

	state = {
		title: '',
		body: ''
	}

	render() {
		return (
			<Mutation mutation={POST_CREATE}>
			{(postCreate, { loading, error, data }) => {
				if (data) {
					console.log(data)
				}

				return (
					<Form onSubmit={e => {
						e.preventDefault()
						const { title, body } = this.state
						postCreate({ variables: { title, body } })
					}}
					>
						<FormGroup role="form" controlId="email">
							<ControlLabel>Title:</ControlLabel>
							<FormControl
								type="text"
								value={this.state.email}
								onChange={(e) => this.setState({ title: e.target.value})}
							/>
						</FormGroup>
						<FormGroup role="form" controlId="password">
							<ControlLabel>Body:</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={this.state.password}
								onChange={(e) => this.setState({ body: e.target.value})}
							/>
						</FormGroup>
						<Button type="submit">Sign In</Button>

						{ loading && <p>Loading...</p> }
						{ error && <p>Something went wrong</p> }
					</Form>
				)
			}}
			</Mutation>
			
		)
	}
}

export default PostCreate
