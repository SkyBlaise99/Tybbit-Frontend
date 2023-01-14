import './App.css';
import React, { useEffect, useState } from "react";
import Profiles from "./components/Profiles";

const api = "https://tybbit-backend.onrender.com/get"

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return fetch(api)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  useEffect(() => { fetchData(); }, [])

  return (
    <div>
      <header className="App-header">
        <h1>Leaderboard</h1>
        <Profiles users={users}></Profiles>
      </header>
    </div>
  );
}
