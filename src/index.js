import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'

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
      <Router>
        <div>
          <Header />
          <App>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </App>
        </div>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
