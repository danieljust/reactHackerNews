import {createAction} from 'redux-actions';
import * as service from './ShowService';

export const FETCH_SHOWS_START = 'FETCH_SHOWS_START';
export const FETCH_SHOWS_END = 'FETCH_SHOWS_END';

export const fetchNewShowsStart = createAction(FETCH_SHOWS_START);
export const fetchNewShowsEnd = createAction(FETCH_SHOWS_END);

export function fetchNewShows() {
    return (dispatch) => {
        dispatch(fetchNewShowsStart());
        service.fetchNewShows()
            .then(newOnes => dispatch(fetchNewShowsEnd(newOnes)))
            .catch(err => dispatch(fetchNewShowsEnd(err)));
    }
}
