import { createAction } from 'redux-actions';
import * as constants from './appConstants';

export const addUser = createAction(constants.ADD_USER);
export const removeUser = createAction(constants.REMOVE_USER);

export const signInStart = createAction(constants.SIGN_IN_START);
export const signInOk = createAction(constants.SIGN_IN_OK);
export const signInError = createAction(constants.SIGN_IN_ERROR);

export const signUpStart = createAction(constants.SIGN_UP_START);
export const signUpOk = createAction(constants.SIGN_UP_OK);
export const signUpError = createAction(constants.SIGN_UP_ERROR);

export const restorePsswordStart = createAction(constants.RESTORE_PASSWORD_START);
export const restorePsswordOk = createAction(constants.RESTORE_PASSWORD_OK);
export const restorePsswordError = createAction(constants.RESTORE_PASSWORD_ERROR);