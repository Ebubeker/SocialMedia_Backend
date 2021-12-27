import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ModuleCss from '../Components/Navbar.module.css';
import {commentContent, commentpara, timeComment, wholComment} from './Comment.module.css';

const Comment = ({wholeComment, user}) => {

    if(!user._id){
        return(
            <div>
                Comment is loading...
            </div>
        )
    }else{
        return (
            <div className={wholComment}>
                <Link to='/otherProfiles' state={{ user }} className={ModuleCss.profile} style={{margin: "20px 0 0 0"}}>
                        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="human" style={{height: "30px", width:"30px"}}/>
                        <h3 style={{color: "black", fontSize: "12px"}}>{user.username}</h3>
                </Link>
                <div className={commentContent}>
                    <p className={commentpara}>{wholeComment.content}</p>
                    <p className={timeComment}>{wholeComment.createdAt.split('T')[0]}    at    {wholeComment.createdAt.split('T')[1].split('.')[0]}</p>
                </div>
            </div>
        )
    }

}

export default Comment
