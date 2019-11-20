import React from 'react';
import Reader from '../components/Reader/Reader.js'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
    return (
      <>
       <BrowserRouter>
          <Switch>
            <Route path="/reader?item=1" exact component={Reader} />
            <Redirect from='/' to='/reader'/>
            <Redirect to={{
              pathname: "/reader",
              search: "?item=1",
          }}            
           />
          </Switch>
          </BrowserRouter>
      </>
    );
  }
  
  export default App;