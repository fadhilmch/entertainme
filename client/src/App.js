import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Query
          query={gql`
            {
              all {
                tvshows{
                  title,
                  overview
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            
              console.log('data',data)

            return data.all.tvshows.map(({ title, overview }, index) => (
              <div key={index}>
                <p>{`${title}: ${overview}`}</p>
              </div>
            ));
          }}
        </Query>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
