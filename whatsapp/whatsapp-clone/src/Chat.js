import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { MoreVert, AttachFile, SearchOutlined} from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic';


const Chat = () => {
  return (
    <div className="chat">
      <div className='chat__header'>
        <Avatar />
        <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>last seen at...</p>
        </div>
        <div className="chat__headerRigt">
            <IconButton>
            <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
      </div>
      <div className="chat__body">
         <p className="chat__message">
            <span className="chat__name">Sonny</span>
            Message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
         </p>
         <p className="chat__message chat__reciever">
            <span className="chat__name">Sonny</span>
            Message 2 recieved
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
         </p>
         
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
            <input
            value
            placeholder='Type a message'
            type="text"
            />
            <button
            type="submit">
                Send a Message
            </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat;