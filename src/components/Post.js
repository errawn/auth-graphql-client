import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'

import FETCH_POST from '../queries/post_query'

class Post extends Component {
	render() {
		return (
			<Query 
				query={FETCH_POST}
				variables={ { id: this.props.computedMatch.params.id } }
			>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Something went wrong</p>
				return (
					<div>
						<Link to='/posts'>Back</Link>
						<h1>{data.post.title}</h1>
						<p>{data.post.body}</p>
					</div>
				)
			}}
			</Query>
		)
	}
}

export default Post