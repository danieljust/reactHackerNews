import {handleActions} from 'redux-actions';
import * as  actions from './ShowActions';

export default handleActions({
        [actions.FETCH_SHOWS_START]: (state, action) => ({
            ...state,
            pending: true
        }),
        [actions.FETCH_SHOWS_END]: {
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
    },
    {
        posts: [],
        error: null,
        pending: false
    }
)
