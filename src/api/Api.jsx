import React from 'react';
import UserPost from './endpoints/UserPost.jsx';
import TokenPost from './endpoints/TokenPost.jsx';
import PhotoPost from './endpoints/PhotoPost.jsx';
import PhotoGet from './endpoints/PhotoGet.jsx';

const Api = () => {
    return (
        <div>
            <h2>USER POST</h2>
            <UserPost/>
            <h2>TOKEN POST</h2>
            <TokenPost/>
            <h2>PHOTO POST</h2>
            <PhotoPost/>
            <h2>PHOTO GET</h2>
            <PhotoGet/>
        </div>
    );
};

export default Api;
