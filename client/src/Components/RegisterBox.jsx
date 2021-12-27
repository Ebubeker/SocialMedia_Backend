import React, {useRef} from 'react';
import ModuleCss from './LogInBox.module.css';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const LogInBox = () => {

    const firstName = useRef(null);
    const username = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const submitLogin = (e) => {
        e.preventDefault();
        
        if(password.current.value === confirmPassword.current.value){
            const newUser = {
                username: username.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
            }
    
            axios.post('/login/createUser', newUser);

            window.location = '/';
        }else{
            alert('password no the sames');
        }
    }

    return (
        <div className={ModuleCss.box}>
            <h1 className={ModuleCss.h1}>Register</h1>
            <hr className={ModuleCss.hr}/>
            <form>
                <input className={ModuleCss.input} type="text" name="firstName" placeholder="First Name" ref={firstName}/>
                <input className={ModuleCss.input} type="text" name="lastName" placeholder="Last Name" ref={lastName}/>
                <input className={ModuleCss.input} type="email" name="email" placeholder="Email" ref={email}/>
                <input className={ModuleCss.input} type="text" name="username" placeholder="Username" ref={username}/>
                <input className={ModuleCss.input} type="password" name="password" placeholder="Password" ref={password}/>
                <input className={ModuleCss.input} type="password" name="passwordconf" placeholder="Confirm Password" ref={confirmPassword}/>
                <button onClick={submitLogin} className={ModuleCss.btn} type="submit">Register</button>
            </form>
            <p>If you don't have an account <Link to="/" className={ModuleCss.link}>Login</Link></p>
        </div>
    )
}

export default LogInBox