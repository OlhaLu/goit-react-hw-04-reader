import React from 'react';
import Reader from '../components/Reader/Reader.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/reader" exact component={Reader} />
          <Redirect to="/reader" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
