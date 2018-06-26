import React, { Component } from 'react'
import {
	Button,
	ControlLabel,
	Form,
	FormControl,
	FormGroup
} from 'react-bootstrap'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router-dom'

import POST_CREATE from '../mutations/post_create_mutation'
import POSTS from '../queries/posts_query'

class PostCreate extends Component {

	state = {
		title: '',
		body: ''
	}

	render() {
		return (
			<Mutation 
				mutation={POST_CREATE}
				//updates store cache
				update={(cache, { data: { addPost } }) => { 
					const { posts } = cache.readQuery({ query: POSTS })
					cache.writeQuery({
						query: POSTS,
						data: { posts: posts.concat(addPost) }
					})
				}}
			>
			{(addPost, { loading, error, data }) => {
				if (loading) return <p>Loading...</p> 
				if (error) return <p>Something went wrong</p>

				if (data) { return <Redirect to='/posts' /> }
				return (
					<Form onSubmit={e => {
						e.preventDefault()
						const { title, body } = this.state
						addPost({ variables: { title, body } })
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
					</Form>
				)
			}}
			</Mutation>
			
		)
	}
}

export default PostCreate
