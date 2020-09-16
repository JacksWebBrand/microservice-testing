import React from 'react';
import PostCreate from './Components/PostCreate.component';
import PostList from './Components/PostList.component';

export default () => {
    return (
    <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
    );
};