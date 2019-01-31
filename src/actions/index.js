import { DATA_LOAD } from '../constants';

export const loadDataRequest = () => ({
    type: DATA_LOAD.REQUEST,
});

export const loadDataSuccess = data => ({
    type: DATA_LOAD.SUCCESS,
    payload: data,
});

export const loadDataError = error => ({
    type: DATA_LOAD.FAIL,
    payload: error,
});