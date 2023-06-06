import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function First() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
    <h1>Users</h1>
    {users.map((user) => (
      <div key={user.show.id}>
        <h2>{user.show.name}</h2>
        <p>ID: {user.show.id}</p>
        <p>URL: {user.show.url}</p>
        <p>URL: {user.show.summary}</p>
        <Link to='/summary' state={{ from:[user.show.summary , user.show.name]  }}>Summary</Link>
      </div>
    ))}
  </div>

  )
}

export default First