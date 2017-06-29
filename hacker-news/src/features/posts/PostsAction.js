import { createAction } from 'redux-actions';
import * as service from './PostsService';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_END = 'FETCH_POSTS_END';
export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_END = 'FETCH_POST_END';

export const fetchPostsStart = createAction(FETCH_POSTS_START);
export const fetchPostsEnd = createAction(FETCH_POSTS_END);
export const fetchPostStart = createAction(FETCH_POST_START);
export const fetchPostEnd = createAction(FETCH_POST_END);

export function fetchPosts(){
   return (dispatch) => {
       dispatch(fetchPostsStart());

       service.fetchPosts()
           .then(posts => dispatch(fetchPostsEnd(posts)))
           .catch(err => dispatch(fetchPostsEnd(err)));
   };
}

export function fetchPost(id){
    return (dispatch) => {
        dispatch(fetchPostStart());
        service.fetchPost(id)
            .then(post => dispatch(fetchPostEnd(post)))
            .catch(err => dispatch(fetchPostEnd(err)));
    };
}
