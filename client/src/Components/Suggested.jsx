import React, {useState, useEffect} from 'react';
import {section, profile, followBtn, profilename, li} from './Suggested.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Suggested = ({profileName, currentUser, userToFollow}) => {

    const [user, setUser] = useState({});
    const [following, setFollowing] = useState(false)
    
    useEffect(() => {
        axios.get(`/login/getuser/${currentUser.id}`).then((result) => setUser(result.data));

    }, [])
    
    useEffect(() => {
        axios.get(`/login/getuser/${currentUser.id}`).then((result) => setUser(result.data));
        if(user.activity){
            const arr = user.activity.followingUsers;
            let checkIfFoll = false;
            arr.map((a) => {
                if(a === userToFollow._id){
                    setFollowing(true);
                    checkIfFoll = true;
                }
            })
            if(!checkIfFoll){
                setFollowing(false);
            }
        }
    }, [user, following]);
    
    
                
    const followSomeone = (e)=>{
        e.preventDefault();
        console.log(user)
        let updated = {
            following: user,
            followed: userToFollow,
        }

        axios.post('/login/follow', updated);
    }

    return (
        <section className={section}>
                <li className={li}>
                    <Link to='/otherProfiles' state={{ userToFollow }} className={profile}>
                        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="human" />
                        <h3 className={profilename}>{profileName}</h3>
                        <a href="" onClick={followSomeone} className={followBtn}>{following ? "Unfollow" : "Follow"}</a>
                    </Link>
                </li>
        </section>
    )
}

export default Suggested
