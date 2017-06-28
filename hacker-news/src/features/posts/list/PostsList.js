import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../PostsAction';

const POST_ID = 5;

export const PostsList = (props) => (
    <ul>
        {
            props.posts.map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))
        }
    </ul>
);

export class PostsListHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchPost())
    }

    render() {
        const {posts,pending} = this.props;

        return pending  ?
            <h1>loading...</h1>:
            <PostsList posts={posts}/>
    }

}

export default connect(state => ({
    posts: state.posts.posts,
    pending: state.posts.pending,
}))(PostsListHOC)
