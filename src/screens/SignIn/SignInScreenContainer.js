import {
    compose,
    withHandlers,
    withStateHandlers,
    hoistStatics,
} from 'recompose';
import screens from '../../navigation/screens';
import SignInScreenComponent from './SignInScreenComponent';

export default hoistStatics(
    compose(
        withStateHandlers({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }, {
            onChage: () => (field, value) => ({
                [field]: value,
            }),
        }),
        withHandlers({
            navigateToSignUp: props => () => props.navigation.navigate(screens.SignUp),
            navigateToRestorePasswrod: props => () => (
                props.navigation.navigate(screens.RestorePassword)
            ),
            signIn: props => () => props.navigation.navigate(screens.AuthorizedApp),
        }),
    ),
)(SignInScreenComponent);