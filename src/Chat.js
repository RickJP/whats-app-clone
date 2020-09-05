import React, {useState} from 'react';
import {Avatar, IconButton as Btn} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

import './Chat.css';

export const Chat = ({messages}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/api/v1/messages/new', {
      message: input,
      name: 'Demo',
      timestamp: '10:30',
      received: true,
    });

    setInput('');
  };

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
        {messages.map((message, index) => (
          <p
            className={`chat__message ${message.received && 'chat__receiver'}`}
            key={index}
          >
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Type here!'
          />
          <button onClick={sendMessage} type='submit'>
            Send Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};
