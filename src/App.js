import React from 'react';
import {createStore} from 'redux';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from './components/Search';
import {Provider} from 'react-redux';
import usersReducer from './reducers/usersReducer';

const store = createStore(usersReducer);

const GlobalStyle = createGlobalStyle`
    /* If I set "body" as a selector in here it's not working anymore, why? */
    *{
        box-sizing: border-box;
        margin : 0;
        padding : 0;
        font-family: 'Times New Roman';
    }
`;

const App = () => {
  return  ( 
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <GlobalStyle/>
              <Search/>
          </Route>
          <Route>
            <div>
            /error : Nothing in here
            </div>
          </Route>
        </Switch>
      </Router>
      </Provider>
  );
}

export default App;
