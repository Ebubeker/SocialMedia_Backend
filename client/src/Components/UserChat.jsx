import React, {useEffect, useContext} from 'react'
import {box} from './UserChat.module.css';
import { InboxContext } from '../contexts/InboxContext';

const UserChat = ({users, index, user}) => {

    const {inboxUser, setInboxUser} = useContext(InboxContext);

    let stor = JSON.parse(localStorage.reduxState);

    useEffect(() => {
        if(index === 0){
            setInboxUser(user); 
        }
    }, [])

    const changeInboxUser = ()=>{
        setInboxUser(user); 
    }

    return (
        <div className={box} onClick={changeInboxUser}>
            {user.username}
        </div>
    )
}

export default UserChat
