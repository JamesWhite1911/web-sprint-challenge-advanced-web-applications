//react
import React from "react";
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
//utils
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import axios from 'axios'
//private route
import PrivateRoute from './components/PrivateRoute'
//components
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
//styles
import "./styles.scss";
import EditMenu from "./components/EditMenu";

function App() {

  const logout = () => {
    axiosWithAuth()
      .post('api/logout')
      .then(() => {
        localStorage.removeItem('token')
      })
      .catch(err => console.log(err))
  }
  return (
    <Router>
      <div className="App">
        <h1>Welcome</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link onClick={logout} to="/login">Logout</Link>
          <Link to="/bubble-page">Bubble Page</Link>
        </nav>
        <PrivateRoute path="/bubble-page" component={BubblePage} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute