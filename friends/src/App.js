import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://images.spoilertv.com/cache/archived-old-shows/friends/season_10/friends-logo-white-type_FULL.jpg"
          alt=""
        />
      </header>
      <Route exact path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;

//The login function should save the returned token to localStorage.
//You can setup isLoading state in your Login component, and show a spinner
//on your form or in your button while the login request is happening.
