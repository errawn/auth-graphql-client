import gql from 'graphql-tag'

export default gql`
	query {
	  posts {
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