import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../NewActions';
import {PostsList} from '../../posts/list/PostsList'

export class NewListHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchNew())
    }

    render() {
        const {posts, pending} = this.props;
        return pending ?
            <h1>loading...</h1> :
            <PostsList posts={posts}/>
    }
}

export default connect(state => ({
    posts: state.newOnes.posts,
    pending: state.newOnes.pending,
}))(NewListHOC)
