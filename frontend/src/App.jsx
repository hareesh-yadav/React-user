import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <div>                
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <Login/>
          </Route>                    
        </Switch>
      </div>
    </Router>
  );
}
