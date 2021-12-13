import React from 'react';
import {h3Design} from '../Components/CreatePost.module.css';
import Post from './Post';
import {containerforall} from './PostList.module.css';

const PostList = ({name}) => {
    return (
        <section >
            <div className={containerforall}>
                <h3 className={h3Design} style={{marginTop: "50px"}}>Posts from your friends</h3>
            </div>
            <Post profileName={name}></Post>
            <Post profileName={name}></Post>
            <Post profileName={name}></Post>
        </section>
    )
}

export default PostList
