import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')}; /* Alineación del mensaje */
  padding: 5px;
  margin: 5px 0;
`;

const Message = styled.div`
  background-color: ${({ isMyMessage }) => (isMyMessage ? '#2C2C2C' : '#e0e0e0')}; /* Naranja para mensajes propios */
  color: ${({ isMyMessage }) => (isMyMessage ? '#fff' : '#000')}; /* Texto blanco para mensajes propios */
  padding: 10px;
  margin-right: 5px;
  border-radius: 8px;
  max-width: 60%;
`;

const MyMessage = ({ children, isMyMessage }) => {
  return (
    <MessageWrapper isMyMessage={isMyMessage}>
      <Message isMyMessage={isMyMessage}>{children}</Message>
    </MessageWrapper>
  );
};

export default MyMessage;
