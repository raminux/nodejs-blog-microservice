import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
    return <div className='container'>
        <h1>Simple Blog Using Microservices</h1>
        <h2>Create Post</h2>
        <PostCreate />
        <hr />
        <PostList />
    </div>;
};