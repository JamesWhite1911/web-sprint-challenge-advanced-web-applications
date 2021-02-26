import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

//username: admin
//password: password

const Login = (props) => {

  const initialData = {
    credentials: {
      username: "",
      password: "",
    },
    error: ""
  }

  const [data, setData] = useState(initialData)

  const handleChange = e => {
    e.persist();
    setData({
      ...data,
      credentials: {
        ...data.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", data.credentials)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.payload))
        props.history.push('/protected')
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={login}>
        <label htmlFor="username">
          <input name="username" placeholder="username" type="text" value={data.credentials.username} onChange={handleChange} />
          {console.log(data)}
        </label>
        <label htmlFor="password">
          <input name="password" placeholder="password" type="password" value={data.credentials.password} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.