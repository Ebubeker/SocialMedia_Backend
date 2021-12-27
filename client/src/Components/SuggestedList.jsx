import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Suggested from './Suggested';
import {containerOfContent, h3withborder} from './SuggestedList.module.css';

const SuggestedList = ({name}) => {

    const [users, setUsers] = useState([]);
    let current = JSON.parse(localStorage.reduxState);

    useEffect(() => {
        axios.get('/login/getuser').then((result) => setUsers(result.data));
    }, [])

    return (
        <div >
            <h3 className={h3withborder}>People to follow</h3>
            <ul className={containerOfContent}>
                {users.map((user) => {
                    if(user.username !== name){
                        return(<Suggested key={user._id} profileName={user.username} currentUser={current} userToFollow={user}></Suggested>);
                    }
                })}
            </ul>
        </div>
    )
}

export default SuggestedList
