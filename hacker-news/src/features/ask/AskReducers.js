import {handleActions} from 'redux-actions';
import * as actions from './AskActions';

export default handleActions({
        [actions.FETCH_COMMENTS_START]: (state, action) => ({
            ...state,
            pending: true,
            error: null
        }),
        [actions.FETCH_COMMENTS_END]: {
            next: (state, action) => ({
                    ...state,
                    pending: false,
                    posts: action.payload
                }
            ),
            throw: (state, action) => ({
                ...state,
                pending: false,
                error: action.payload
            })
        }
    },
    {
        posts: [],
        pending: false,
        error: null
    }
)
