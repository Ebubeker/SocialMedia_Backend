import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faBell } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import ModuleCss from './Navbar.module.css';

const Navbar = ({profileName}) => {

    return (
        <nav className={ModuleCss.navbar}>
            <div className={ModuleCss.container}>
                <div className={ModuleCss.content}>
                    <div>
                        <Link to="/" className={ModuleCss.removeTextDecoration} >
                            <h1 className={ModuleCss.navbrand}>Ray Social</h1>
                        </Link>
                    </div>
                    <div className={ModuleCss.searchBar}>
                        <input type="text" name="search" placeholder="Search..." className={ModuleCss.input}/>
                        <FontAwesomeIcon icon={faSearch} className={ModuleCss.searchIcon}/>
                    </div>
                    <div className={ModuleCss.interaction}>
                        <Link to="/inbox">
                            <FontAwesomeIcon className={ModuleCss.iconDesign} icon={faPaperPlane}/>
                        </Link>
                        <FontAwesomeIcon className={ModuleCss.iconDesign} icon={faBell}/>
                        <Link to="/profile"  className={ModuleCss.profile}>
                            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="human" />
                            <h3>{profileName}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
