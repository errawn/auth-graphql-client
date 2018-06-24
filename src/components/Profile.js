import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import currentUserQuery from '../queries/CurrentUser'

class Profile extends Component {
	render() {

		console.log(this.props.data)

		return (
			<div>
				Profile
			</div>
		)
	}
}


export default graphql(currentUserQuery, {
	options: {
		context: {
			headers: {
				"authentication": "test"
			}
		}
	}
})(Profile)