import React from 'react';
import {section, profile, followBtn, profilename} from './Suggested.module.css';

const Suggested = ({profileName}) => {
    return (
        <section className={section}>
                <li className={profile}>
                    <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="human" />
                    <h3 className={profilename}>{profileName}</h3>
                    <a href="" className={followBtn}>Follow</a>
                </li>
        </section>
    )
}

export default Suggested
