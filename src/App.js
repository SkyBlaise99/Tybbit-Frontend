import './App.css';
import React, { useEffect, useState } from "react";
import Profiles from "./components/Profiles";

const apiRed = "https://tybbit-backend.onrender.com/get/red"
const apiBlue = "https://tybbit-backend.onrender.com/get/blue"

export default function App() {
  const [usersRed, setUsersRed] = useState([]);
  const [usersBlue, setUsersBlue] = useState([]);

  const fetchData = (api, func) => {
    return fetch(api)
      .then((response) => response.json())
      .then((data) => func(data));
  }

  useEffect(() => {
    fetchData(apiRed, setUsersRed);
    fetchData(apiBlue, setUsersBlue);
  }, [])

  return (
    <div>
      <header className="App-header">
        <h1>Leaderboard</h1>
        <div className="App-profiles">
          <Profiles users={usersRed} color="#ED939D" isRed={true}></Profiles>
          <Profiles users={usersBlue} color="#93CAED" isRed={false}></Profiles>
        </div>
      </header>
    </div>
  );
}
