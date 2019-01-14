import {
    compose,
    withHandlers,
    withStateHandlers,
    hoistStatics,
    withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import screens from '../../navigation/screens';
import SignInScreenComponent from './SignInScreenComponent';
import * as appOperations from '../../modules/app/appOperations';
import { withLoadingModal } from '../../utils/enhancers';

const mapStateToProps = state => ({
    user: state.app,
    isLoading: state.app.isSigningIn,
});

const mapStateToDispatch = {
    signIn: appOperations.signIn,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapStateToDispatch),
        withLoadingModal(props => props.isLoading, 'Signing In...'),
        withStateHandlers({
            email: 'admin@gmail.com',
            password: '12345678',
            isValid: false,
            isValidPassword: false,
            isValidEmail: false,
            errorMessage: '',
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
            signIn: props => async () => { // eslint-disable-line
                if (!props.isValid) {
                    return;
                }
                
                try {
                    props.onChange('errorMessage', '');
                    await props.signIn({
                        email: props.email,
                        password: props.password,
                    });
                    return props.navigation.navigate(screens.AuthorizedApp); // eslint-disable-line
                } catch (err) {
                    props.onChange('errorMessage', 'Incorrect email or password');
                }
            },
        }),
        withPropsOnChange(
            ['email', 'password'],
            (props) => {
                const isValid = (
                    props.password.trim().length >= 8
                    && props.email.trim().includes('@')
                );
                const isValidPassword = !(props.password.trim().length >= 8);
                const isValidEmail = !(props.email.trim().includes('@'));
                props.onChange('isValid', isValid);
                props.onChange('isValidPassword', isValidPassword);
                props.onChange('isValidEmail', isValidEmail);
            },
        ),
    ),
)(SignInScreenComponent);