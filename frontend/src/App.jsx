import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const Card = ({ email, name }) => {
  return (
    <div className="card">
      <p className='name'>{name}</p>
      <p className='email'>{email}</p>
    </div>
  );
}
// hello


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    let result = await fetch('https://test-mern-api-psi.vercel.app/list');
    result = await result.json();
    setUsers(result)
  }

  return (
    <div className="App">
      <h1>Data Fetched From API</h1>
      {
        users.map((item, index) => (

          <Card key={index} name={item.name} email={item.email} />
        ))
      }
    </div>
  );
}

export default App;
