// ConfigurationWindow.js
import React from 'react';
import ProfileTemplate from '../Configurations/Prof/Prof';
import EncryptionTemplate from '../Configurations/Encryption/Encryption';
import LogOutTemplate from '../Configurations/LogOut/LogOut';

function ConfigurationWindow({ type }) {
  let content;

  switch(type) {
    case 'Profile': 
      content = <ProfileTemplate />;
      break;
    case 'Encryption': 
      content = <EncryptionTemplate />;
      break;
    case 'LogOut': 
      content = <LogOutTemplate />;
      break;
    // Add more cases here if needed
    default:
      content = <div>Default Content</div>;
      break;
  }

  return (
    <>
        {content}   
    </>
  );
}

export default ConfigurationWindow;