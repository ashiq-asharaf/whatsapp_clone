import React from 'react'
import './Sidebar.css';
import DonutLargeIcon  from '@mui/icons-material/DonutLarge';
import { IconButton, Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';



function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <div className="sidebar__headerRight">
                <Avatar src="https://static.tnn.in/thumb/msid-97167289,thumbsize-509305,width-1280,height-720,resizemode-75/97167289.jpg"/>
                <IconButton>
                    <DonutLargeIcon />
                 </IconButton>
                 <IconButton>
                    <ChatIcon />
                 </IconButton>
                 <IconButton>
                    <MoreVertIcon />
                 </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlinedIcon />
                <input placeholder="Search or start new chat" type="text" />
            </div>

        </div>
        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar