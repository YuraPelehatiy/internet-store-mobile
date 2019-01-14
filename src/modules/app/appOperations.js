import * as Api from '../../api/Api';
import * as appActions from './appActions';

export const init = () => async (dispatch) => {
    try {
        /* await Api.initApp();
        // const user = getState().app.user;
        // const res = await Api.User.getCurrent();
        dispatch(appActions.addUser({
            // user: res.data.user,
        })); */
        const token = await Api.getToken();
        if (!token) {
            throw Error();
        }
        await Api.initApp();
        const res = await Api.User.getCurrent();
        dispatch(appActions.addUser({
            user: res.data.user,
        }));
    } catch (error) {
        console('Error init');
        // await Api.setToken(undefined);
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
        dispatch(appActions.signInError());
        throw new Error();
    }
};

export const signUp = values => async (dispatch) => {
    try {
        dispatch(appActions.signUpStart());
        const res = await Api.Auth.register(values);
        console.log('RES', res.data);
        await Api.setToken(res.data.token);

        // const resUser = await Api.User.getCurrent();
        // console.log('RES USER', resUser.data);
        dispatch(appActions.addUser({
            user: res.data.user,
        }));
        dispatch(appActions.signUpOk());
    } catch (error) {
        dispatch(appActions.signUpError());
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
        const res = await Api.Auth.remember(values);
        console.log('RES', res.data);

        // const resUser = Api.User.getCurrent();
        // console.log('RES USER', resUser.data);
        dispatch(appActions.restorePsswordOk());
    } catch (error) {
        dispatch(appActions.restorePsswordError());
        throw new Error();
    }
};