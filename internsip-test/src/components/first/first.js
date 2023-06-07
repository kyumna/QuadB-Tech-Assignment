import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Car from './carousel';
import styles from './first.module.css';
import card1 from '../../images/card1.jpg';


import Button from 'react-bootstrap/Button';

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
      <Car className={styles.car}></Car>
      <div className={styles.parent}>
        {users.map((user) => (
          <div key={user.show.id} className={styles.card}>
            <div className={styles.imgdiv}>
              <img className={styles.cardImg} alt='' src={card1}></img></div>
            <div className={styles.text}>
              <h2>{user.show.name}</h2>
              <p className={styles.small}>Type: {user.show.type}</p>
              <p className={styles.small}>Language: {user.show.language}</p>
           
              <Link to='/summary' state={{ from: [user.show.summary, user.show.name , user.show.genres , user.show.status ] }}> <Button variant="warning"> Summary</Button>{' '}</Link>
            </div>
          </div>
        ))}</div>
    </div>

  )
}

export default First