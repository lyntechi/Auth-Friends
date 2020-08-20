import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });


  const inputHandler = (e) => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value });
  };
  const friendSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log("add friend", res);
        setFriends(res.data)
      })
      .catch((error) => {
        console.log("error happend with the post request to API", error);
      });
  };


  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        setFriends(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="friendsContainer">
      <form className="friendForm" onSubmit={friendSubmit}>
        <label htmlFor="username">
          <p>Name</p>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="name . . ."
            value={newFriend.name}
            onChange={inputHandler}
          />
        </label>

        <label htmlFor="password">
          <p>Age</p>

          <input
            type="age"
            id="age"
            name="age"
            placeholder="age . . ."
            value={newFriend.age}
            onChange={inputHandler}
          />
        </label>
        <br />
        <label htmlFor="password">
          <p>Email</p>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="email . . ."
            value={newFriend.email}
            onChange={inputHandler}
          />
        </label>
        <br />
        <button type="submit" >Add</button>
      </form>

      {friends.map((friend) => {
        return (
          <div key={friend.id} className="friendCard">
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
