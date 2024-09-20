// src/components/Topbar.js
import React from 'react';
import styled from 'styled-components';

const TopbarContainer = styled.div`
  height: 60px;
  background-color: #2C2C2C;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

function Topbar() {
  return (
    <TopbarContainer>
      <Title>Chat Dashboard</Title>
    </TopbarContainer>
  );
}

export default Topbar;
