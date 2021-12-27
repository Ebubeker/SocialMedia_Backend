import React from 'react';
import {Link} from 'react-router-dom';
import {footer, ul, li, link, credits} from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={footer}>
            <ul className={ul}>
                <li className={li}>
                    <Link to="/" className={link}>- Home</Link>
                </li>
                <li className={li}>
                    <Link to="/profile" className={link}>- Profile</Link>
                </li>
                <li className={li}>
                    <Link to="/" className={link}>- Discover</Link>
                </li>
            </ul>
            <p className={credits}>The web app was created by <a href="https://beker-dev.vercel.app/" target="_blank">Ebubeker Rexha</a></p>
        </footer>
    )
}

export default Footer
