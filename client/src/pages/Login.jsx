import StylesMod from './Login.module.css';
import LogInBox from '../Components/LogInBox';
import React, {useState, useEffect} from 'react';

const Login = () => {

    return (
        <div className={StylesMod.logWindow}>
            <LogInBox></LogInBox>
        </div>
    )
}

export default Login;
