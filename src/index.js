import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import Routes from './routes'

const networkInterface = createNetworkInterface({
  uri: '/graphql'
});

const client = new ApolloClient({
	networkInterface,
	dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
