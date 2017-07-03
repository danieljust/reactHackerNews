import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../ShowActions';
import {PostsList} from '../../posts/list/PostsList';

export class ShowListHOC extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchNewShows());
    }

    render() {
        const {posts, pending} = this.props;
        return pending ?
            <h1>loading...</h1> :
            <PostsList posts={posts}/>
    }
}

export default connect(state => ({
    posts: state.show.posts,
    pending: state.show.pending,
}))(ShowListHOC)
