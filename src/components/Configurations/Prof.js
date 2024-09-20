// src/components/ProfileTemplate.js
import styled from 'styled-components';
import UserItem from '../mainArea/UserItem';
import ButtonTemplate from '../Button';
import { FaPencilAlt } from 'react-icons/fa';



const ProfileContainer = styled.div`
  display: block; 
  width: 50%;
  background-color: #e0e0e0;
  color: #333;
  padding: 20px;
  border-left: 1px solid #ddd;
  overflow-y: auto;
`;

const ProfileConfiguration = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: #e0e0e0;
  color: #333;
  padding: 20px;
  border-left: 1px solid #ddd;
  overflow-y: auto;
`;

const ImgConf = styled.div`
    &:hover {
    
  }
`;


const ProfileTemplate = () => {
    return (
        <ProfileContainer>
            <h1 className=''>Perfil</h1>
            <ProfileConfiguration className='space-y-10'>
                <ImgConf className='hover:opacity-90'>
                    <UserItem className = 'hover:opacity-90'
                        urlImage="https://randomuser.me/api/portraits/men/32.jpg"
                        size="150px"
                        gap={false}
                        >
                    </UserItem>
                </ImgConf>
                <div className='w-full'>
                <label>Nombre</label>
                    <div className='flex w-full justify-between'>
                    < h2 className=''>Carlos Pecina</h2>     
                    <ButtonTemplate color='#e0e0e0' hover_color='#2C2C2C' rounded="40%">
                        <FaPencilAlt/>
                    </ButtonTemplate>
                    </div>
                </div>
                <div className='w-full'>
                <label>Descripción</label>
                    <div className='flex w-full justify-between'>
                    <p className='font-normal text-xl'>Buenas chavales</p>
                    <ButtonTemplate color='#e0e0e0' hover_color='#2C2C2C' rounded="40%">
                        <FaPencilAlt/>
                    </ButtonTemplate>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                </div>
                <div className='w-full'>
                <label>Estado.</label>
                    <div className='flex w-full justify-between'>
                    <p className='font-normal text-xl'>Buenas chavales</p>
                    <ButtonTemplate color='#e0e0e0' hover_color='#2C2C2C' rounded="40%">
                        <FaPencilAlt/>
                    </ButtonTemplate>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                </div>
            </ProfileConfiguration>
        </ProfileContainer>
    );
};

export default ProfileTemplate;
