import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  let [user, setUser] = React.useState(null);
  let [loading, setLoading] = React.useState(false);

  let fetchUser = async () => {
    setLoading(true);
    try {
      let response = await fetch("https://randomuser.me/api");
      let data = await response.json();
      setUser(data, results[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="app-container">
      {loading ? (
        <div className="spinner">
        </div>) : (
        <>
          {user && (
            <div className="user-info">
              <img src={user.picture.large} alt="user-profile" />
              <h2>{user.name.first}</h2>
              <p>Email : {user.email}</p>
              <p>Country : {user.location.country}</p>
            </div>
          )}
          <button onClick={fetchUser}>Generate User</button>
        </>
      )}
    </div>
  );
}

export default App;
