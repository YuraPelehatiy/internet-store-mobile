import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';

const initialState = {
    items: {},
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