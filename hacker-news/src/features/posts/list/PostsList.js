import React, {Component} from 'react';
import {Post} from '../Post';

export const PostsList = (props) => (
    <ul style={{'listStyle': 'none'}}>
        {
            props.posts.map(post => (
                <li key={post.id}>
                    <Post data={post}/>
                </li>
            ))
        }
    </ul>
);
