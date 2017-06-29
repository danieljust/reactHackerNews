import {handleActions} from 'redux-actions';
import * as actions from './PostsAction';

export default handleActions({
    [actions.FETCH_POST_START]: (state, action) => ({
        ...state,
        pending: true,
        error: null
    }),

    [actions.FETCH_POST_END]: {
        next: (state, action) => ({
            ...state,
            pending: false,
            post: action.payload
        }),

        throw: (state, action) => ({
            ...state,
            pending: false,
            error: action.payload
        })
    }
}, {
    error: null,
    post: '',
    pending: false
});
