import {combineReducers} from 'redux';
import posts from '../features/posts/PostsReducer';
import post from '../features/posts/SinglePostReducer';
export default combineReducers({
    posts,
    post
})
