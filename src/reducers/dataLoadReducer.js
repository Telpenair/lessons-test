import { DATA_LOAD } from '../constants';

const initialState = {
    isLoading: false,
    data: {},
    error: {
        userMessage: '',
        serverMessage: ''
    }
}

/**
 * Увидел интересную практику разделения редьюсера на несколько по количеству данных в стейте.
 * То есть здесь к пример можно три отдельных редьюсера сделать. Но не уверен что стоит.
 */
export const dataLoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOAD.REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case DATA_LOAD.SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            };
        case DATA_LOAD.FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};