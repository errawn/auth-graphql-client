import React from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  // enable caching thru id
  dataIdFromObject: o => o.id
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Hello World!
      </div>
    </ApolloProvider>
  )
}

export default App