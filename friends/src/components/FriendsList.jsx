import React, { useState, useEffect } from "react";
import axios from "axios";
export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("/api/friends", {
        baseURL: "http://localhost:5000",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setFriends(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {friends.map((friend) => {
        return <div key={friend.id}><p>Name: {friend.name}</p>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        </div>;
      })}
    </div>
  );
}
