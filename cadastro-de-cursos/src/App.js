import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NewPage from './pages/New';

function App() {
  const theme = {
    primary: "#012370", 
    secondary: "#009cde",
    background: "#F0F0F5",
    text: "#6C6C80",
    date: "#6C6C80",
    white: "#FFF",
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
              <HomePage />
            </Route>
          <Route path="/new" >
          <NewPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;