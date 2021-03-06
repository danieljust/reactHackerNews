import {handleActions} from 'redux-actions';
import * as actions from './PostsAction';

export default handleActions({
    [actions.FETCH_POSTS_START]: (state, action) => ({
        ...state,
        pending: true,
        error: null
    }),

    [actions.FETCH_POSTS_END]: {
        next: (state, action) => ({
            ...state,
            pending: false,
            posts: action.payload
        }),

        throw: (state, action) => ({
            ...state,
            pending: false,
            error: action.payload
        })
    }
}, {
    error: null,
    posts: [],
    pending: false
});
