import React, {useRef, useState, useEffect} from 'react';
import ModuleCss from './LogInBox.module.css';
import { Link, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import store from '../redux/store/store';
import {loggIn, loggOff} from '../redux/actions/actions';
import subscribe from '../redux/store/subscribe';

const LogInBox = () => {
    const userInput = useRef(null);
    const passwordInput = useRef(null);
    let user = false;
    let history = useNavigate();

    const fetchData = () => {
        axios.get(`/login/confirmAccount/${userInput.current.value}_${passwordInput.current.value}`)
        .then((response)=>{
            const data = response.data;
            if(data.auth === true){
                user = data;
            }
        })
    }

    
    const submitLogin = (e) => {
        e.preventDefault();
        fetchData();
        setTimeout(()=>{
            if(user){
                store.dispatch(loggIn(userInput.current.value, user.token, user.result._id));
                subscribe();
                window.location.reload(false);
                history('/');
            }else{
                alert('user not found!!!');
            }
        }, 500)
    }

    return (
        <div className={ModuleCss.box}>
            <h1 className={ModuleCss.h1}>Login</h1>
            <hr className={ModuleCss.hr}/>
            <form>
                <input className={ModuleCss.input} type="text" name="username" placeholder="Username" ref={userInput}/>
                <input className={ModuleCss.input} type="password" name="password" placeholder="Password" ref={passwordInput}/>
                <button className={ModuleCss.btn} type="submit" onClick={submitLogin}>Log In</button>
            </form>
            <p>If you don't have an account <Link to="/register" className={ModuleCss.link}>Register</Link></p>
        </div>
    )
}

export default LogInBox
