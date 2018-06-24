import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Routes from './routes'

const client = new ApolloClient({
  uri: '/graphql',
  headers: {
    "authentication": localStorage.getItem('token') || null
  }
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));