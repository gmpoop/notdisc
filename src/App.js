// src/App.js
import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Configuration from '../src/components/Configurations/Configuration';
import ConfigurationWindow from '../src/components/Configurations/ConfigurationWindow';
import Login from './components/Login/Login'; 
import  Register from './components/Register/Register'; 
import  Main from './components/Main/main'; 

function App()  {

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} /> {/* Ruta para el Login */}
        <Route path="/register" element={<Register />} /> Ruta para el Registro
        <Route path="/main" element={<Main />} /> Ruta para el Registro
        <Route path="/conf" element={<Configuration />} /> Ruta para el Registro
        <Route path="/confwin" element={<ConfigurationWindow />} /> Ruta para el Registro

      </Routes>
    </Router>

  );
}

export default App;
