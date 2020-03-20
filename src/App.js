import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';


const Header = styled.div`
  width: 80%;
  min-height: 100px;
  padding: 10px 0;
  margin : auto;
`

const Title = styled.div`
  text-align: center;
  font-size: 40px;
`

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
      <Router>
        <Switch>
          <Route exact path="/">
            <GlobalStyle/>
              <div className="App">
                  <Header>
                    <Title>
                      Gravity Search
                    </Title>
                  </Header>
                  <SearchBar text = "Giani"/>
              </div>
          </Route>
          <Route>
            <div>
            /error : Nothing in here
            </div>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
