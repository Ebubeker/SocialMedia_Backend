import React, {useContext, useEffect, useRef, useState} from 'react'
import {content, title, commentArea, form, nrComments, btn, commentList, cross} from './CommentSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import { CommentContext } from '../contexts/CommentContext';
import axios from 'axios';

const CommentSection = ({initialState, currentUser_Id, post}) => {
    const {commentIs, setCommentIs} = useContext(CommentContext);
    const commentContent = useRef(null);

    const [allComments, setAllComments] = useState([]);
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        setCommentIs(initialState);
        axios.get(`/login/getuser`).then((resp)=> setUsers(resp.data));
    }, [initialState])

    useEffect(() => {
        axios.get(`/login/getComments/${post._id}`).then((result)=>setAllComments(result.data)).catch((err)=> console.log(err));
    }, [allComments]);

    const closeComment = () => {
        if(commentIs){
            setCommentIs(false);
        }
    }

    const submitComment = (e) => {
        e.preventDefault();
        const newComment = {
            content: commentContent.current.value,
            user_id: currentUser_Id,
            post_id: post._id
        }

        commentContent.current.value = "";

        axios.post('/login/comment', newComment);
    }

    if(commentIs){
        return (
            <div style={{filter: "none"}} className={content}>
                <p className={title}><strong>Comments <span className={nrComments}>({allComments.length})</span></strong></p>
                <form className={form}>
                    <textarea ref={commentContent} name="commentArea" className={commentArea} ></textarea>
                    <button onClick={submitComment} className={btn}>Send</button>
                </form>
                <div className={commentList}>
                    {allComments.map((allC)=>{
                        let comment = users.map((user)=>{
                            if(user._id === allC.user_made_id){
                                return(<Comment key={allC._id} wholeComment={allC} user={user}></Comment>);
                            }
                        })
                        return(comment);
                    })}
                </div>
                <FontAwesomeIcon onClick={closeComment} className={cross} icon={faTimes}></FontAwesomeIcon>
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }

}

export default CommentSection;
