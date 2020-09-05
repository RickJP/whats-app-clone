import React, {useEffect, useState} from 'react';
import './App.css';
import {Sidebar} from './Sidebar';
import {Chat} from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/messages/sync').then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('a26cdf4116a20abcb492', {
      cluster: 'ap3',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      console.log(newMessage);
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
