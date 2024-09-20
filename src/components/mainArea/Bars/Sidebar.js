// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaComments, FaUsers, FaCog, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2C2C2C;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
    color: #2C2C2C;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
`;

function Sidebar() {

  const navigate = useNavigate();

  const handleAddParams = (click) => {
    if(click === ''){
      return false 
    }
    if(click === 'chats'){
      navigate('/main?wind=chats', { replace: true });
    }
    if(click === 'conf'){
      navigate('/main?wind=conf', { replace: true });
    }
    if(click === 'grupos'){
      navigate('/main?wind=groups', { replace: true });
    }
    if(click === 'rewards'){
      return false;
    } 

  };

  return (
    <SidebarContainer>
      <SidebarItem>
        <Icon>
          <FaComments />
        </Icon>
        <button onClick={() => handleAddParams('chats')}>
          Chats
        </button>
      </SidebarItem>  
      <SidebarItem>
        <Icon>
          <FaUsers />
        </Icon>
        <button onClick={() => handleAddParams('grupos')}>
            Grupos
          </button>
      </SidebarItem>
      <SidebarItem>
        <Icon>
          <FaCog />
        </Icon>
          <button onClick={() => handleAddParams('conf')}>
            Configuración
          </button>
      </SidebarItem>
      <SidebarItem>
        <Icon>
          <FaTrophy />
        </Icon>
          <button onClick={() => handleAddParams('')}>
            Recompensas
          </button>
      </SidebarItem>

    </SidebarContainer>
  );
}

export default Sidebar;
