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
import AddGuide from "./components/AddGuide/AddGuide";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import Bookings from "./components/Bookings/Bookings";
import AddReview from "./components/AddReview/AddReview";
import AddPlace from "./components/AddPlace/AddPlace";
import Book from "./components/Book/Book";

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
        <Route path="/admin/add-guide">
          <AddGuide />
        </Route>
        <Route path="/admin/add-place">
          <AddPlace />
        </Route>
        <Route path="/admin/add-admin">
          <AddAdmin />
        </Route>
        <Route path="/admin/bookings">
          <Bookings />
        </Route>
        <Route path="/admin/places">
          <Bookings />
        </Route>
        <Route path="/user/book/:id">
          <Book />
        </Route>
        <Route path="/user/bookings">
          <Bookings />
        </Route>
        <Route path="/user/review">
          <AddReview />
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
