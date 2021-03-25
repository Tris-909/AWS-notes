import React, {useState, useEffect} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { AppContext } from './libs/contextLib';
import { onError } from './libs/errorLib';
import { Auth } from "aws-amplify";
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/404';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Main from './screens/Main';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      setAuthenticated(true);
    } catch (error) {
      if (error !== "No Current User") {
        onError(error);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
    <AppContext.Provider value={{ authenticated, setAuthenticated }}>
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
    </AppContext.Provider>  
  ));
}

export default App;
