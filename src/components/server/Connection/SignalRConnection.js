// SignalRConnection.js
import { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

const useSignalRConnection = (url, username) => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    if (!username) return;

    const newConnection = new HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, [url, username]);

  return connection;
};

export default useSignalRConnection;