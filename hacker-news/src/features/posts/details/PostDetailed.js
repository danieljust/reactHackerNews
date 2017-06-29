import React, {Component} from 'react';
import * as actions from '../PostsAction';
import {connect} from 'react-redux';

export const PostDetailed = (props) => (
    <div key={props.post.id}>
        <div>{props.post.title}</div>
        <div>{props.post.body}</div>
    </div>
);

class PostDetailedHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchPost(this.props.match.params.postId));
    }

    render() {
        const {pending, post} = this.props;
        return pending ?
            <div>Loading this post...</div> :
            (<div>
                <PostDetailed post={post}/>
            </div>)
    }
}

export default connect(state => ({
    post: state.post.post,
    pending: state.post.pending
}))(PostDetailedHOC);
