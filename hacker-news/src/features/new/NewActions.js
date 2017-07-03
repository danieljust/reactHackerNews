import {createAction} from 'redux-actions';
import * as service from './NewService';

export const FETCH_NEW_START = 'FETCH_NEW_START';
export const FETCH_NEW_END = 'FETCH_NEW_END';

export const fetchNewStart = createAction(FETCH_NEW_START);
export const fetchNewEnd = createAction(FETCH_NEW_END);

export function fetchNew() {
    return (dispatch) => {
        dispatch(fetchNewStart());
        service.fetchNew()
            .then(newOnes => dispatch(fetchNewEnd(newOnes)))
            .catch(err => dispatch(fetchNewEnd(err)));
    }
}
