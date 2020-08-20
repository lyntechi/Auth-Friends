import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute.js";
function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://images.spoilertv.com/cache/archived-old-shows/friends/season_10/friends-logo-white-type_FULL.jpg"
          alt=""
        /><br/>
          <img src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/10/Friends.jpg" alt="" id="friendsPicture"/>
        <div className="links">
        <Link to="/" id="linkHome">
          <h2>Home</h2>
        </Link>
        <Link to="/login" id="linkHome">
          <h2>Login</h2>
        </Link>
        <Link to="/friendslist" id="linkHome">
          <h2>FriendsList</h2>
        </Link>
        </div>
      </header>
      <Switch>
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route>
          <Login />
        </Route>
      </Switch>
      
    </div>
    
  );
  
}

export default App;
