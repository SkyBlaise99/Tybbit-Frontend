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
        <h1>Leaderboard</h1>
        <ol>
          {
            users && users.length > 0 && users.map((user) => (
              <li>
                {user.name} | {user.score}
              </li>
            ))
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
