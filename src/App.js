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
    <div>
      <header className="App-header">
        <h1>Leaderboard</h1>
        <div id="profile">
          <div className="flex">
            <div className="info">
              <h3 className='name'>Rank</h3>
            </div>
            <div className="info">
              <h3 className='name'>Name</h3>
            </div>
            <div className="info">
              <h3 className='name'>Score</h3>
            </div>
          </div>
          {
            users && users.length > 0 && users.map((user, index) => (
              <div className="flex" key={index}>
                <div className="item">
                  <span>{index + 1}</span>
                </div>
                <div className="item">
                  <span>{user.name}</span>
                </div>
                <div className="item">
                  <span>{user.score}</span>
                </div>
              </div>
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
