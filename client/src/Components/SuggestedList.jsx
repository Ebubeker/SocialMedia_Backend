import React from 'react';
import Suggested from './Suggested';
import {containerOfContent, h3withborder} from './SuggestedList.module.css';

const SuggestedList = ({name}) => {
    return (
        <div >
            <h3 className={h3withborder}>People to follow</h3>
            <ul className={containerOfContent}>
                <Suggested profileName={name}></Suggested>
                <Suggested profileName={name}></Suggested>
                <Suggested profileName={name}></Suggested>
            </ul>
        </div>
    )
}

export default SuggestedList
