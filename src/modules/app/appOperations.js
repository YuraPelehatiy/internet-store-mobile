import * as Api from '../../api/Api';
import * as appActions from './appActions';
import { setLocale } from '../../utils';

export const init = () => async (dispatch, getState) => {
    try {
        setLocale(getState().app.language);

        const token = await Api.getToken();
        if (!token) {
            throw Error('Token not found');
        }

        await Api.initApp();

        const user = getState().app.user;

        if (!user.id) {
            const res = await Api.User.getCurrent();
            dispatch(appActions.addUser({
                user: res.data.user,
            }));
        }
    } catch (error) {
        console('Error init');
        throw new Error(error);
    }
};

export const signIn = values => async (dispatch) => {
    try {
        dispatch(appActions.signInStart());
        const res = await Api.Auth.login(values);

        await Api.setToken(res.data.token);

        const resUser = await Api.User.getCurrent();

        dispatch(appActions.addUser({
            user: resUser.data.user,
        }));
        dispatch(appActions.signInOk());
    } catch (error) {
        dispatch(appActions.signInError({ error }));
        throw new Error();
    }
};

export const signUp = values => async (dispatch) => {
    try {
        dispatch(appActions.signUpStart());
        const res = await Api.Auth.register(values);
        // We get res.data.success = true
        if (res.data.success) {
            signIn({
                email: values.email,
                password: values.password,
            });
        }

        dispatch(appActions.signUpOk());
    } catch (error) {
        dispatch(appActions.signUpError({ error }));
        throw new Error();
    }
};

export const signOut = () => async (dispatch) => {
    try {
        dispatch(appActions.signOutStart());
        await Api.removeToken();

        dispatch(appActions.removeUser());
        dispatch(appActions.signOutOk());
    } catch (error) {
        dispatch(appActions.signOutError({ error }));
        throw new Error();
    }
};

export const restorePassword = values => async (dispatch) => {
    try {
        dispatch(appActions.restorePsswordStart());
        const res = await Api.Auth.remember(values); // eslint-disable-line
        dispatch(appActions.restorePsswordOk());
    } catch (error) {
        dispatch(appActions.restorePsswordError({ error }));
        throw new Error();
    }
};