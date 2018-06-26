import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
	render() {
		return (
			<div>
				<Link to='/posts'>Back</Link>
				<h1>Post with id: {this.props.computedMatch.params.id}</h1>
				<p>post body</p>
			</div>
		)
	}
}

export default Post