import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ ismymessage }) => (ismymessage ? 'flex-end' : 'flex-start')}; /* Alineación del mensaje */
  padding: 5px;
  margin: 5px 0;
`;

const Message = styled.div`
  background-color: ${({ ismymessage }) => (ismymessage ? '#2C2C2C' : '#e0e0e0')}; /* Naranja para mensajes propios */
  color: ${({ ismymessage }) => (ismymessage ? '#fff' : '#000')}; /* Texto blanco para mensajes propios */
  padding: 10px;
  margin-right: 5px;
  border-radius: 8px;
  max-width: 60%;
`;

const MyMessage = ({ children, ismymessage }) => {
  return (
    <MessageWrapper ismymessage={ismymessage}>
      <Message ismymessage={ismymessage}>{children}</Message>
    </MessageWrapper>
  );
};

export default MyMessage;
