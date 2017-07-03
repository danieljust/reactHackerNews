import {createAction} from 'redux-actions';
import * as service from './NewService';
import {getLastestId} from '../../utils/commonAPI';
export const FETCH_NEW_START = 'FETCH_NEW_START';
export const FETCH_NEW_END = 'FETCH_NEW_END';
export const fetchNewStart = createAction(FETCH_NEW_START);
export const fetchNewEnd = createAction(FETCH_NEW_END);
const cond = require('lodash.cond');
const matches = require('lodash.matches');
const lt = require('lodash.lt');
const eq = require('lodash.eq');
const stubTrue = require('lodash.stubtrue');
const constant = require('lodash.constant');

export function fetchNew() {
    return (dispatch, getState) => {
        const state = getState();

        function getFromStore() {
            dispatch(fetchNewEnd(state.newOnes.posts));
        };

        function getFromRemote() {
            dispatch(fetchNewStart());
            service.fetchNew()
                .then(newOnes => dispatch(fetchNewEnd(newOnes)))
                .catch(err => dispatch(fetchNewEnd(err)));
        };

        if (state.newOnes.posts.length === 0) {
            dispatch(fetchNewStart());
            service.fetchNew()
                .then(newOnes => dispatch(fetchNewEnd(newOnes)))
                .catch(err => dispatch(fetchNewEnd(err)));
        } else {
            const checkId =
                cond([
                    [id => state.newOnes.posts[0].id === id, getFromStore],
                    [stubTrue, getFromRemote]
                ]);

            getLastestId()
                .then(result => {
                    debugger;
                    return checkId(result);
                })
        }
    }
}
