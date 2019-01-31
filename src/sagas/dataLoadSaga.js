import { put, call, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, loadDataError } from '../actions';
import { DATA_LOAD } from '../constants';
import axios from 'axios';

/**
 * По хорошему сообщения об ошибках и функции http вызовов надо бы выносить отдельно, но здесь
 * решил не усложнять.
 */
function* handleDataLoad() {
    try {
        const data = yield call(axios.get, 'https://api.myjson.com/bins/h0wmg');
        yield put(loadDataSuccess(data));
    } catch (e) {
        yield put(loadDataError({
            userMessage: 'На сервере возникла неисправность, извините за причиненные неудобства',
            serverMessage: e.message
        }));
    }
}

export function* watchDataLoad() {
    yield takeEvery(DATA_LOAD.REQUEST, handleDataLoad);
}