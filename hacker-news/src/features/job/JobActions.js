import {createAction} from 'redux-actions';
import * as service from './JobService';

export const FETCH_JOBS_START = 'FETCH_JOBS_START';
export const FETCH_JOBS_END = 'FETCH_JOBS_END';

export const fetchJobsStart = createAction(FETCH_JOBS_START);
export const fetchJobsEnd = createAction(FETCH_JOBS_END);

export function fetchJobs() {
    return (dispatch) => {
        dispatch(fetchJobsStart());
        service.fetchJobs()
            .then(jobs => dispatch(fetchJobsEnd(jobs)))
            .catch(err => dispatch(fetchJobsEnd(err)));
    }
}
