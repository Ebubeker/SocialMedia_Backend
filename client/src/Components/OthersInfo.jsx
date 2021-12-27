import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from '../Components/Post';
import Navbar from '../Components/Navbar';
import {content, firstSide, secondSide, h3design, followList, logout} from './OthersInfo.module.css';
import { Link } from 'react-router-dom';
import UserInfo from '../Components/UserInfo';
import SuggestedList from '../Components/SuggestedList';
import Footer from '../Components/Footer';
import {icons, messageBox, loadMoreBtn} from '../Components/PostList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';


const OthersInfo = ({userClicked}) => {

    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5)
    let counter = 0;

    useEffect(() => {
        axios.get(`/login/getuser/${userClicked._id}`)
        .then(response => {
            setUser(response.data);
        });

        axios.get(`/login/postContent/${userClicked._id}`)
        .then(response => {
            setPosts(response.data);
        })
    }, [limit])

    const loadMorePosts = () =>{
        setLimit(limit + 5);
    }

    return (
        <div>
            <Navbar profileName={user.username}></Navbar>
            <div className={content}>
                <div className={firstSide}>
                    <h1 className={h3design}>User Information</h1>
                    <UserInfo user={user} activity={user.activity}></UserInfo>
                    <div className={followList}>
                        <SuggestedList name={user.username}/>
                    </div>
                </div>
                <div className={secondSide}>
                    <h1 className={h3design}>Posts from you</h1>
                    {posts.map((post) => {
                        if(counter < limit){
                            counter++;
                            return(<Post key={post._id} profileName={user.username} post={post}></Post>);
                        }
                    })}
                    <p className={messageBox}>This platform offers milions of posts, try to also create your content and share it with others. If you wish to continue type the large button bellow to load 5 more posts</p>
                    <div onClick={loadMorePosts} className={loadMoreBtn}>
                        <p>Load More posts</p>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className={icons}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default OthersInfo
