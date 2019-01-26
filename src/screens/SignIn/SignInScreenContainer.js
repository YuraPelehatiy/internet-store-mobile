import { Keyboard, LayoutAnimation } from 'react-native';
import {
    compose,
    withHandlers,
    withStateHandlers,
    hoistStatics,
    withPropsOnChange,
    lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import screens from '../../navigation/screens';
import SignInScreenComponent from './SignInScreenComponent';
import * as appOperations from '../../modules/app/appOperations';
import { withLoadingModal, withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    user: state.app,
    isLoading: state.app.isSigningIn,
    language: state.app.language,
});

const mapDispatchToProps = {
    signIn: appOperations.signIn,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withLoadingModal(props => props.isLoading, 'Signing In...'),
        withStateHandlers({
            email: 'admin@gmail.com',
            password: '12345678',
            isValid: false,
            isValidPassword: false,
            isValidEmail: false,
            errorMessage: '',
            isShowingKeyboard: false,
        }, {
            onChange: () => (field, value) => ({
                [field]: value,
            }),
            showInvalidFields: props => () => ({
                isValidPassword: !(props.password.trim().length >= 8),
                isValidEmail: !(props.email.trim().includes('@')),
            }),
        }),
        withHandlers({
            navigateToSignUp: props => () => props.navigation.navigate(screens.SignUp),
            navigateToRestorePasswrod: props => () => (
                props.navigation.navigate(screens.RestorePassword)
            ),
            signIn: props => async () => { // eslint-disable-line
                if (!props.isValid) {
                    props.showInvalidFields();
                    return;
                }

                props.onChange('isValidPassword', false);
                props.onChange('isValidEmail', false);

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
        lifecycle({
            componentDidMount() {
                Keyboard.addListener('keyboardDidShow', () => {
                    LayoutAnimation.easeInEaseOut();
                    this.props.onChange('isShowingKeyboard', true);
                });
                Keyboard.addListener('keyboardDidHide', () => {
                    LayoutAnimation.easeInEaseOut();
                    this.props.onChange('isShowingKeyboard', false);
                });
            },
            componentWillUnmount() {
                Keyboard.removeAllListeners('keyboardDidShow');
                Keyboard.removeAllListeners('keyboardDidHide');
            },
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
        withLanguageOnChange('language', 'auth.signIn.header'),
    ),
)(SignInScreenComponent);