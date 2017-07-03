import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../JobActions';
import {PostsList} from '../../posts/list/PostsList'

export class JobListHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchJobs())
    }

    render() {
        const {posts, pending} = this.props;
        return pending ?
            <h1>loading...</h1> :
            <PostsList posts={posts}/>
    }
}

export default connect(state => ({
    posts: state.jobs.posts,
    pending: state.jobs.pending,
}))(JobListHOC)
