import gql from 'graphql-tag'

export default gql`
	query fetchPost($id: ID!){
	  post(id: $id) {
	    title
	    body
	  }
	}
`;