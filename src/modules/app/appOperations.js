import * as Api from '../../api/Api';
import * as appActions from './appActions';

export const signIn = values => async (dispatch) => {
    try {
        const res = await Api.Auth.login(values);
        console.log('RES', res.data);
        Api.setToken(res.data.token);

        // const resUser = Api.User.getCurrent();
        // console.log('RES USER', resUser.data);
        dispatch(appActions.addUser({
            user: res.data.user,
        }));
    } catch (error) {
        throw new Error();
    }
};