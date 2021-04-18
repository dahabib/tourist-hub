import React, { createContext, useState } from "react";
import Home from './components/Home/Home/Home';
import Places from './components/Home/Places/Places';
import AddService from './components/AddService/AddService';
import AdminPanel from './components/AdminPanel/AdminPanel';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext({});

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/admin/add-service">
          <AddService />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin/dashboard">
          <AdminPanel />
        </PrivateRoute>        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
