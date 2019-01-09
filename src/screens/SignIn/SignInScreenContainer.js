import {
    compose,
    withHandlers,
    withStateHandlers,
    hoistStatics,
    withPropsOnChange,
} from 'recompose';
import screens from '../../navigation/screens';
import SignInScreenComponent from './SignInScreenComponent';

export default hoistStatics(
    compose(
        withStateHandlers({
            email: '',
            password: '',
            isValid: false,
        }, {
            onChange: () => (field, value) => ({
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
        withPropsOnChange(
            ['email', 'password'],
            (props) => {
                const isValid = (
                    props.password.trim().length >= 8
                    && props.email.trim().includes('@')
                );

                props.onChange('isValid', isValid);
            },
        ),
    ),
)(SignInScreenComponent);