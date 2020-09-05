import React from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

export const SidebarChat = () => {
  return (
    <div className='sidebar__chat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h4>Room Name</h4>
        <p>This is last message</p>
      </div>
    </div>
  );
};
