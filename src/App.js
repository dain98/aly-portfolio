import React from 'react';
import './App.css';
import FrontPage from "./FrontPage/FrontPage";
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Switch>
        <Route exact path={'/'} component={FrontPage}/>
        <FrontPage />
      </Switch>
  );
}

export default App;
