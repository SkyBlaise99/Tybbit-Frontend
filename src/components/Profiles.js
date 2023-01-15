import './Profiles.css';

export default function Profiles({ users, color, isRed }) {
  return (
    <div id="profile" style={{ paddingBottom: "1em", backgroundColor: color }}>
      <h2 className='title'>{ isRed ? "Mislabeled" : "Jumbled" }</h2>
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
  );
}
