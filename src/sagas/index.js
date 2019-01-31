import { all } from 'redux-saga/effects';

import { watchDataLoad } from './dataLoadSaga';

export default function* rootSaga() {
    yield all([ watchDataLoad() ]);
}
