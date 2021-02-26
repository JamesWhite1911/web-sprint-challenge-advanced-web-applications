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

function App() {

  const logout = () => {
    axiosWithAuth()
      .post('api/logout')
      .then(res => {
        console.log(res)
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
          <Link to="/protected">Protected Page</Link>
        </nav>
        <PrivateRoute path="/protected" component={BubblePage} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute