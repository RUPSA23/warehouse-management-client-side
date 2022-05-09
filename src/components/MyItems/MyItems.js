import MyItem from "../MyItem/MyItem";
import {getAuth} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import './MyItems.css';
const auth = getAuth(app);


const MyItems = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/myItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setMyItem(data);
          return data;
        });
    }
  }, [user]);

  return (
    <div className="container"> 
      {myItem.map((item) => (
        <MyItem key={item._id} item={item}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;
