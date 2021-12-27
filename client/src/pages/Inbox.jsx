import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import {content, usersToChat, chatSide,inbox_section, title} from './Inbox.module.css';
import Chat from '../Components/Chat';
import axios from 'axios';
import UserChat from '../Components/UserChat';
import { InboxProvider } from '../contexts/InboxContext';

const Inbox = () => {
    const [users, setUsers] = useState([]);
    let stor = JSON.parse(localStorage.reduxState);

    useEffect(() => {
        axios.get(`/login/getuserExcept/${stor.id}`).then((result) => setUsers(result.data));
    }, [])
    console.log(users);

    return (
        <InboxProvider>
            <div className={inbox_section}>
                <Navbar profileName={stor.username}></Navbar>
                <div className={content}>
                    <div className={usersToChat}>
                        <h1 className={title}>Users to chat</h1>
                        {users.map((user, index)=>{
                            if(user.username !== stor.username){
                                return(<UserChat key={user._id} users={users} index={index} user={user}></UserChat>)
                            }
                        })}
                    </div>
                    <Chat className={chatSide}/>
                </div>
            </div>
        </InboxProvider>
    )
}

export default Inbox
