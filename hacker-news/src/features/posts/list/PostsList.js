import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../PostsAction';
import {Link} from 'react-router-dom';

const POST_ID = 5;

export const PostsList = (props) => (
    <ul>
        {
            props.posts.map(post => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    <p>{post.body}</p>
                </li>
            ))
        }
    </ul>
);

export class PostsListHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchPosts())
    }

    render() {
        const {posts, pending} = this.props;

        return pending ?
            <h1>loading...</h1> :
            <PostsList posts={posts}/>
    }

}

export default connect(state => ({
    posts: state.posts.posts,
    pending: state.posts.pending,
}))(PostsListHOC)
