import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Bars/Sidebar/Sidebar';
import ChatArea from '../Chat/ChatArea/ChatArea';
import ChatMenu from '../Chat/ChatMenu/ChatMenu';
import GroupMenu from '../Group/GroupMenu';
import UserList from '../UserList/UserList';
import  Configuration from "../Configurations/Configuration";
import  ConfigurationWindow from "../Configurations/ConfigurationWindow";
import { useLocation } from 'react-router-dom';


const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
`;

const ChatSection = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Main = ({ children, isMyMessage }) => {

    const location = useLocation();
    // const navigate = useNavigate(); //TODO: Implementar navegación
   
    const query = new URLSearchParams(location.search);
    const wind = query.get('wind'); // Obtiene el valor del parámetro de consulta 'type'
    const type = query.get('type'); // Obtiene el valor del parámetro de consulta 'type'
    const id = query.get('id'); // Obtiene el valor del parámetro de consulta 'type'

  
    // const handleAddParams = () => {
    //   const newParams = new URLSearchParams(location.search);
    //   newParams.set('wind', 'conf');
    //   newParams.set('type', 'Profile');
  
    // //   navigate(`${location.pathname}?${newParams.toString()}`, { replace: true });
    // };

    const renderContent = () => {
        
        if (wind === 'chats') {
            if (id){
                return (
                    <>        
                        <ChatSection>
                        <ChatArea />
                        <UserList />
                        </ChatSection>    
                    </>
                ) 
            }
            return (
                <>       
                    <ChatMenu/> 
                    <UserList />
                </>
            )
          }
        if (wind === 'groups') {
            return (
                <>                
                    <GroupMenu/>    
                    <UserList />
                </>
            )
          }
        if (wind === 'conf') {
                if(!type) {
                    return (
                        <>                
                            <Configuration/>    
                        </>
                    )
                }
                if (type === 'Profile') {
                    return (
                        <>                
                            <Configuration/>
                            <ConfigurationWindow type={type}/>    
                        </>
                    )
                }
                if (type === 'LogOut') {
                    return (
                        <>                
                               
                        </>
                    )
                }
          }
      };

    return (
    <AppContainer>
        <Sidebar />
         {renderContent()}
    </AppContainer>
    );
  };

  export default Main;