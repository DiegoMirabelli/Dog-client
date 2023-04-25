import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LandingPage, Home, Detail, CreateDog } from './views/index';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <LandingPage />
      </Route>

      <Route exact path='/home'>
      <Home />
      </Route>
      
      <Route exact path='/dogs/:id'>
      <Detail />
      </Route>
      <Route exact path="/createDog">
        <CreateDog />
      </Route>

    </Router>
  );
}

export default App;
