import React from 'react';
import {Avatar, IconButton as Btn} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />

        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <Btn>
            <SearchOutlined />
          </Btn>
          <Btn>
            <AttachFile />
          </Btn>
          <Btn>
            <MoreVert />
          </Btn>
        </div>
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Apache</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>

        <p className='chat__message'>
          <span className='chat__name'>Apache</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Apache</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Apache</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Apache</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>

        <p className='chat__message'>
          <span className='chat__name'>Apache</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>

        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Bob</span>
          This is a good message.
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input type='text' placeholder='Type here!' />
          <button type='submit'>Send Message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};
