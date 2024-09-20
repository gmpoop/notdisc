// src/components/UserList.js
import React from 'react';
import styled from 'styled-components';
import UserItem from '../';


const UserListContainer = styled.div`
  width: 350px;
  background-color: #e0e0e0;
  color: #333;
  padding: 20px;
  border-left: 1px solid #ddd;
  overflow-y: auto;
`;


function UserList() {
  return (
    <UserListContainer>
      <h3>Usuarios Conectados</h3>
            <UserItem urlImage="https://randomuser.me/api/portraits/men/32.jpg">
                Carlos Pecina
            </UserItem>      
            <UserItem urlImage="https://i.pravatar.cc/150?img=12">
                Max Zertuche
            </UserItem>   
            <UserItem urlImage="https://i.pravatar.cc/150?img=1">
                Mateo Zamora
            </UserItem>   
    </UserListContainer>
  );
}

export default UserList;
