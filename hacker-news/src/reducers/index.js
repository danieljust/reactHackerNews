import {combineReducers} from 'redux';
import posts from '../features/posts/PostsReducer';
import post from '../features/posts/SinglePostReducer';
import asks from '../features/ask/AskReducers';
import newOnes from '../features/new/NewReducers';
import jobs from '../features/job/JobReducers';
import show from '../features/show/ShowReducers';

export default combineReducers({
    posts,
    post,
    asks,
    newOnes,
    jobs,
    show
})
