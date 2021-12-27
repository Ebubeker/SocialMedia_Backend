import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {h3Design} from '../Components/CreatePost.module.css';
import Post from './Post';
import {containerforall, loadMoreBtn, icons, messageBox} from './PostList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

const PostList = ({name}) => {

    const [posts, setPosts] = useState([]);
    const [limit, setlimit] = useState(5)
    let counter = 0;

    const loadMorePosts = ()=>{
        setlimit(limit + 5);
    }

    useEffect(() => {
        axios.get(`/login/postContent`)
        .then((result) => {
            setPosts(result.data)
        })
    }, [posts, limit])

    return (
            <section >
                <div className={containerforall}>
                    <h3 className={h3Design} style={{marginTop: "50px"}}>Posts from your friends</h3>
                </div>
                {posts.map((post)=>{
                    if(counter < limit){
                        counter++;
                        return(<Post key={post._id} profileName={name} post={post}></Post>);
                    }
                })}
                <p className={messageBox}>This platform offers milions of posts, try to also create your content and share it with others. If you wish to continue type the large button bellow to load 5 more posts</p>
                <div onClick={loadMorePosts} className={loadMoreBtn}>
                    <p>Load More posts</p>
                    <FontAwesomeIcon icon={faArrowAltCircleDown} className={icons}></FontAwesomeIcon>
                </div>
            </section>
    );
}

export default PostList
