import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://images.spoilertv.com/cache/archived-old-shows/friends/season_10/friends-logo-white-type_FULL.jpg"
          alt=""
        />
       <Link to="/"><h2>Return to login</h2></Link> 
      </header>
      <Switch>
        <Route exact path="/friendslist" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
