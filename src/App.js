// src/App.js
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/mainArea/Bars/Sidebar';
import ChatArea from './components/mainArea/Messages/ChatArea';
import UserList from './components/mainArea/Bars/UserList';
import Configuration from './components/Configuration';
import ConfigurationWindow from './components/ConfigurationWindow';
import Topbar from './components/mainArea/Bars/Topbar';
import Login from './components/Log-Reg/Login'; 
import  Register from './components/Log-Reg/Reg'; 
import  Main from './components/mainArea/main'; 

const ConfigurationContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta para el Login */}
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/main" element={<Main />} /> Ruta para el Registro
        <Route path="/conf" element={<Configuration />} /> Ruta para el Registro
        <Route path="/confwin" element={<ConfigurationWindow />} /> Ruta para el Registro
        {/* <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/register" element={<Register />} /> Ruta para el Registro  */}

      </Routes>
    </Router>

  );
}

export default App;
