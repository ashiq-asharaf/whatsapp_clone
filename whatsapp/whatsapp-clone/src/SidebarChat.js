import React from 'react';
import "./SidebarChat.css";
import { Avatar } from '@mui/material';

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat">
        <h2>Room name</h2>
        <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat;