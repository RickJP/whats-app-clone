import React from 'react';
import './Sidebar.css';
import {Avatar, IconButton as Btn} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {SidebarChat} from './SidebarChat';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg' />
        <div className='sidebar__headerRight'>
          <Btn>
            <DonutLargeIcon />
          </Btn>
          <Btn>
            <ChatIcon />
          </Btn>
          <Btn>
            <MoreVertIcon />
          </Btn>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};
