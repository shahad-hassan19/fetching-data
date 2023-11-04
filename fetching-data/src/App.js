import { useState , useEffect} from 'react';

function App() {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then(data => setUser(data));

  }

  useEffect(() => {
    fetchData()},
    []);

    return Object.keys(user).length > 0 ?
    (<div style={{padding: "40px"}}>
      <h1>Customer Data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="pic" />
    </div>) :
    (
      <div>
        <h1>Data pending...</h1>
      </div>
    );
}

export default App;
