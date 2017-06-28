import { createAction } from 'redux-actions';
import * as service from './PostsService';

export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_END = 'FETCH_POST_END';

export const fetchPostStart = createAction(FETCH_POST_START);
export const fetchPostEnd = createAction(FETCH_POST_END);

export function fetchPost(){
   return (dispatch) => {
       dispatch(fetchPostStart());

       service.fetchPosts()
           .then(posts => dispatch(fetchPostEnd(posts)))
           .catch(err => dispatch(fetchPostEnd(err)));
   };
}
