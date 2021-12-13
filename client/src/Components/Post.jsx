import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import {cardPost, image, interactionIcons, postContent, section, icon, date} from './Post.module.css';
import ModuleCss from '../Components/Navbar.module.css';
import { Link } from 'react-router-dom';

const Post = ({profileName}) => {
    return (
        <section className={section}>
            <div className={cardPost}>
                <Link to='/profile' className={ModuleCss.profile} style={{margin: "20px 0"}}>
                    <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="human" />
                    <h3 style={{color: "black"}}>{profileName}</h3>
                </Link>
                <p className={date}>Posted on 14:34 12/12/2021</p>
                <div className={image}>
                    <img src="https://images.unsplash.com/photo-1638201970932-b7e7b05c6c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className={interactionIcons}>
                    <div className={icon}>
                        <FontAwesomeIcon  icon={faHeart}></FontAwesomeIcon> 0
                    </div>
                    <div className={icon}>
                        <FontAwesomeIcon  icon={faComment}></FontAwesomeIcon> 0
                    </div>
                </div>
                <div className={postContent}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, soluta magnam. Tenetur cupiditate, deleniti quaerat doloribus harum sed deserunt pariatur a sequi, esse reprehenderit, minima praesentium aut eaque. Vel ipsa, deserunt perferendis voluptate itaque, hic porro eos at beatae cum dolorem commodi ipsam mollitia. Numquam repellat ducimus consequatur vero eius.</p>
                </div>
            </div>
        </section>
    )
}

export default Post
