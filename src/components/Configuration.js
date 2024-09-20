
// src/components/ChatArea.js
import React from 'react';
import styled from 'styled-components';
import UserItem from './mainArea/UserItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const ConfigurationContainer = styled.div`
  flex-grow: 1;   
  position: relative;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  
`;


const ConfigurationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: auto;      
  overflow-y: auto;
  background-color: #fff;
  min-height: 460px;
`;

const ConfItem = styled.div`
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

const Button = styled.button`
  padding: 10px 15px;
  background-color: #2C2C2C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff7a2f;
  }
`;

function Configuration() {

  const navigate = useNavigate();

    const handleAddParams = (click) => {
      if(click === ''){
        console.log("te regresa falso lol")
        return false 
      }
      if(click === 'profile'){
        navigate('/main?wind=conf&type=Profile', { replace: true });
      }
      if(click === 'encrip'){
        navigate('/main?wind=conf&type=Encrip', { replace: true });
      }


    };

  return (
    <ConfigurationContainer>  
        <h1>Configuración</h1>    
        <ConfigurationBox>
           <ConfItem>
            <button onClick={() => handleAddParams('profile')}>
              <h3>Perfil</h3>
            </button>
           </ConfItem>
           <ConfItem>
           <button onClick={() => handleAddParams('encrip')}>
              <h3>Encriptación</h3>
            </button>          
             </ConfItem>
           <ConfItem>
            <Link to='/'>
              <h3>Cerrar Sesión</h3>
            </Link>
           </ConfItem>
        </ConfigurationBox>
    </ConfigurationContainer>
  );
}

export default Configuration;
