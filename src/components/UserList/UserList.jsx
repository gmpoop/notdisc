// src/components/UserList.js
import React from 'react';
import styled from 'styled-components';
import UserItem from '../Elements/UserItem';
import signalRService from '../server/Connection/signalRService';
import { useEffect, useState } from 'react';



const UserListContainer = styled.div`
  width: 350px;
  background-color: #e0e0e0;
  color: #333;
  padding: 20px;
  border-left: 1px solid #ddd;
  overflow-y: auto;
`;


function UserList() {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await signalRService.getUserConnected();
      setUserList(users);

      // const stats = await signalRService.getChatStatistics();
      // setChatStats(stats);
    };

    fetchData();
  }, []);

  return (
    <UserListContainer>
      <h3>Usuarios Conectados</h3>
      {userList.map((user) => (
        <UserItem key={user.id} urlImage={""}>
          {user.fullname}
        </UserItem>
      ))}
    </UserListContainer>
  );
}export default UserList;

