import {handleActions} from 'redux-actions';
import * as actions from './JobActions';

export default handleActions({
        [actions.FETCH_JOBS_START]: (state, action) => ({
            ...state,
            pending: true,
            error: null
        }),
        [actions.FETCH_JOBS_END]: {
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
        posts: [],
        pending: false,
        error: null
    }
)
