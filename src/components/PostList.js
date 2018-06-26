import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'

import POSTS from '../queries/posts_query'

class PostList extends Component {
	render() {
		return (
			<Query query={POSTS}>
			{({ loading, error, data }) => {
				if (loading) return <p>loading...</p> 
				if (error) return <p>Something went wrong...</p>
				return (
					<div>
						<ListGroup>
							{ data.posts.map(post => (
								<ListGroupItem key={post.id}>
									<Link to={`/posts/${post.id}`}>{post.title}</Link>
								</ListGroupItem>
							)) }
						</ListGroup>
					</div>
				)
			}}
			</Query>
		)
	}
}

export default PostList