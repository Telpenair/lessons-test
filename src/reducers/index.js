import { combineReducers } from 'redux'
import { dataLoadReducer } from './dataLoadReducer'

export const rootReducer = combineReducers({
    dataLoad: dataLoadReducer,
})