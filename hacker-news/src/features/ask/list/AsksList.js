import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../AskActions';
import {PostsList} from '../../posts/list/PostsList'

export class AsksListHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchComments())
    }

    render() {
        const {posts, pending} = this.props;
        return pending ?
            <h1>loading...</h1> :
            <PostsList posts={posts}/>
    }
}

export default connect(state => ({
    posts: state.asks.posts,
    pending: state.asks.pending,
}))(AsksListHOC)
