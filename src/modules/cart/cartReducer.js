import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';

const initialState = {
    items: {},
    isLoading: false,
    error: null,
};

export default handleActions({
    [constants.ADD]: (state, action) => ({
        ...state,
        items: addItem(state, action),
    }),
    [constants.REMOVE]: (state, action) => ({
        ...state,
        items: removeItem(state, action),
    }),
    [constants.INCREASE]: (state, action) => ({
        ...state,
        items: increase(state, action),
    }),
    [constants.DECREASE]: (state, action) => ({
        ...state,
        items: decrease(state, action),
    }),
    [constants.ENTER_VALUE]: (state, action) => ({
        ...state,
        items: enterValue(state, action),
    }),
    [constants.FETCH_PRODUCTS_START]: state => ({
        ...state,
        isLoading: true,
    }),
    [constants.FETCH_PRODUCTS_OK]: state => ({
        ...state,
        isLoading: false,
    }),
    [constants.FETCH_PRODUCTS_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
    }),
}, initialState);


function addItem(state, action) {
    if (!state.items[action.payload.id]) {
        return ({
            ...state.items,
            [action.payload.id]: {
                id: action.payload.id,
                count: action.payload.value,
            },
        });
    }

    return ({
        ...state.items,
        [action.payload.id]: {
            id: action.payload.id,
            count: state.items[action.payload.id].count + action.payload.value,
        },
    });
}

function removeItem(state, action) {
    const items = state.items;
    delete items[action.payload.id];
    return ({
        ...items,
    });
}

function increase(state, action) {
    return ({
        ...state.items,
        [action.payload.id]: {
            ...state.items[action.payload.id],
            count: state.items[action.payload.id].count + 1,
        },
    });
}

function decrease(state, action) {
    if (state.items[action.payload.id].count - 1 < 0) {
        return state.items;
    }

    return ({
        ...state.items,
        [action.payload.id]: {
            ...state.items[action.payload.id],
            count: state.items[action.payload.id].count - 1,
        },
    });
}

function enterValue(state, action) {
    if (action.payload.value < 0) {
        return {
            ...state.items,
            [action.payload.id]: {
                ...state.items[action.payload.id],
                count: 0,
            },
        };
    }

    return {
        ...state.items,
        [action.payload.id]: {
            ...state.items[action.payload.id],
            count: action.payload.value,
        },
    };
}