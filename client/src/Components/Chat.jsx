import React, {useContext, useRef, useState, useEffect} from 'react';
import {section, header, activity, messageSection, chatMessageSend, input, btn, messageByMe, messageByUser, time} from './Chat.module.css';
import { InboxContext } from '../contexts/InboxContext';
import axios from 'axios';

const Chat = () => {

    const {inboxUser, setInboxUser} = useContext(InboxContext);
    const [messagesSent, setMessagesSent] = useState([]);
    const cotain = useRef(null)
    let stor = JSON.parse(localStorage.reduxState);
    
    useEffect(() => {
        axios.get(`/login/getMessage/${stor.id} ${inboxUser._id}`).then((result)=>setMessagesSent(result.data));
    }, [messagesSent])

    //Post a message
    const submitMessage = (e) => {
        e.preventDefault();
        const newMessage = {
            content: cotain.current.value,
            userSent: stor.id,
            userRecieved: inboxUser._id
        }
        cotain.current.value = "";
        axios.post('/login/message', newMessage);
    }

    return (
        <div className={section}>
            <div className={header}>
                <p>{inboxUser.username}</p>
                <div className={activity}>Online now</div>
            </div>
            <div className={messageSection}>
                {messagesSent.map((mes)=>{
                    if(stor.id === mes.useSend){
                        return(
                            <div key={mes._id} className={messageByUser}>
                                <p>{mes.content}</p>
                                <p className={time}>{mes.createdAt.split('T')[0]}    at    {mes.createdAt.split('T')[1].split('.')[0]}</p>
                            </div>
                        )
                    }else if(inboxUser._id === mes.useSend){
                        return(
                            <div key={mes._id} className={messageByMe}>
                                <p>{mes.content}</p>
                                <p className={time}>{mes.createdAt.split('T')[0]}    at    {mes.createdAt.split('T')[1].split('.')[0]}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={chatMessageSend}>
                <p>Send A Message</p>
                <textarea ref={cotain} name="message" className={input}></textarea>
                <button onClick={submitMessage} className={btn}>Send</button>
            </div>
        </div>
    )
}

export default Chat
