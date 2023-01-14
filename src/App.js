import React, { useEffect, useState } from "react";
import './App.css';

const api = "https://tybbit-backend.onrender.com/get"

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return fetch(api)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  useEffect(() => { fetchData(); }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Leaderboard</p>
      </header>
    </div>
  );
}

export default App;
