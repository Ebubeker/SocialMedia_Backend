import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import {content, profileImage, BasicInfo, activityInfo} from './UserInfo.module.css';

const UserInfo = ({user, activity}) => {


    if(user.activity){
        console.log(user.activity)
        return (
            <section>
                <div className={content}>
                    <div className={profileImage}>
                        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    </div>
                    <div className={BasicInfo}>
                        <p><b>First Name:</b> <em>{user.firstName}</em></p>
                        <p><b>Last Name:</b> <em>{user.lastName}</em></p>
                        <p><b>Email:</b> <em>{user.email}</em></p>
                        <p><b>Username:</b> <em>{user.username}</em></p>
                    </div>
                </div>
                <div className={content}>
                    <div className={activityInfo} >
                        <h1>Likes</h1>
                        <h1>{user.activity.Likes}</h1>
                    </div>
                    <div className={activityInfo}>
                        <h1>Followers</h1>
                        <h1>{user.activity.followers}</h1>
                    </div>
                    <div className={activityInfo}>
                        <h1>Following</h1>
                        <h1>{user.activity.following}</h1>
                    </div>
                </div>
            </section>
        )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default UserInfo
