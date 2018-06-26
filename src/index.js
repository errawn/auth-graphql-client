import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'

import Routes from './routes'
import client from './client'

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));