import {createAction} from 'redux-actions';
import * as service from './AskService';

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START';
export const FETCH_COMMENTS_END = 'FETCH_COMMENTS_END';

export const fetchCommentsStart = createAction(FETCH_COMMENTS_START);
export const fetchCommentsEnd = createAction(FETCH_COMMENTS_END);

export function fetchComments() {
    return (dispatch) => {
        dispatch(fetchCommentsStart());
        service.fetchComments()
            .then(comments => dispatch(fetchCommentsEnd(comments)))
            .catch(err =>  dispatch(fetchCommentsEnd(err)));
    };
}
