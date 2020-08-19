import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
  });
  const inputHandler = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error happend with the post request to API", error);
      });
  };
  return (
    <div className="form">
      <form onSubmit={login}>
        <label htmlFor="username">
          <p>Username</p>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username . . ."
            value={credentials.username}
            onChange={inputHandler}
          />
        </label>
        <br />
        <label htmlFor="password">
          <p>Password</p>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password . . ."
            value={credentials.password}
            onChange={inputHandler}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
