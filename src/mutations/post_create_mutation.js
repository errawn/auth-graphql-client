import gql from 'graphql-tag'

export default gql`
	mutation PostCreate($title: String!, $body: String!){
	  addPost(title: $title, body: $body) {
	  	id
	    title
	    body
	    user {
	    	id
	    	email
	    }
	  }
	}
`;