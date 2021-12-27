import React from 'react';
import OthersInfo from '../Components/OthersInfo';
import { useLocation } from 'react-router-dom';

const OthersProfile = () => {

    const location = useLocation()
    const { userToFollow } = location.state
    return (
        <div>
            <OthersInfo userClicked={userToFollow} />
        </div>
    )
}

export default OthersProfile
