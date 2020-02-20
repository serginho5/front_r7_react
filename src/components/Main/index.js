import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import { CardImg, Card, CardText, CardMain, LinkCard } from './styles';

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/data');

      setUsers(response.data);
    }
    loadUsers();
  }, [])

  return (
    <Container>
      <ul>
        {users.map(user => (
          <li key={user.__id}>
            <Card>
              <LinkCard>
                <CardMain>
                  <CardImg>
                    <img src={user.picture} alt="barbara" /></CardImg>
                  <CardText>
                    <h1>{user.name}</h1>
                    <p>{user.description}</p>
                  </ CardText>
                </ CardMain>
              </ LinkCard>
            </ Card>
          </li>
        ))}
      </ul>
    </Container>

  )
}

export default Main;
