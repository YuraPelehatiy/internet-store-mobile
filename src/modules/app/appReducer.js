import { handleActions } from 'redux-actions';
import * as constants from './appConstants';

const initialState = {
    user: {},
    isSignedIn: false,
    error: null,
    // isLodaign
    isSigningIn: false,
    isSigningUp: false,
    isRestoringPassword: false,
};

export default handleActions({
    [constants.ADD_USER]: (state, action) => ({
        ...state,
        user: action.payload.user,
    }),
    [constants.REMOVE_USER]: state => ({
        ...state,
        user: {},
    }),
    [constants.SIGN_IN_START]: state => ({
        ...state,
        isSigningIn: true,
        error: null,
    }),
    [constants.SIGN_IN_OK]: state => ({
        ...state,
        isSigningIn: false,
    }),
    [constants.SIGN_IN_ERROR]: (state, actions) => ({
        ...state,
        isSigningIn: false,
        error: actions.payload,
    }),
    [constants.SIGN_UP_START]: state => ({
        ...state,
        isSigningUp: true,
        error: null,
    }),
    [constants.SIGN_UP_OK]: state => ({
        ...state,
        isSigningUp: false,
    }),
    [constants.SIGN_UP_ERROR]: (state, actions) => ({
        ...state,
        isSigningUp: false,
        error: actions.payload,
    }),
    [constants.RESTORE_PASSWORD_START]: state => ({
        ...state,
        isRestoringPassword: true,
        error: null,
    }),
    [constants.RESTORE_PASSWORD_OK]: state => ({
        ...state,
        isRestoringPassword: false,
    }),
    [constants.RESTORE_PASSWORD_ERROR]: (state, actions) => ({
        ...state,
        isRestoringPassword: false,
        error: actions.payload,
    }),
}, initialState);