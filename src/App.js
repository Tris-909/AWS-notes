import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/404';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Main from './screens/Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
