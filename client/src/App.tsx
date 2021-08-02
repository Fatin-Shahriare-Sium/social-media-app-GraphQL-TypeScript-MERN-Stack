import React from 'react';
import Signup from './component/signup/signup';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './component/login/login';
import Main from './component/main/main';
import DataProvider from './store';
function App() {


  let client = new ApolloClient({
    uri: "http://localhost:5000",
    cache: new InMemoryCache()

  })
  return (

    <ApolloProvider client={client}>
      <DataProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </DataProvider>
    </ApolloProvider>

  );
}

export default App;
