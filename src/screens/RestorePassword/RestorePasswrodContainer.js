import { Keyboard } from 'react-native';
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
import RestorePasswrodComponent from './RestorePasswrodComponent';
import * as appOperations from '../../modules/app/appOperations';
import { withLoadingModal, withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    user: state.app,
    isLoading: state.app.isRestoringPassword,
    language: state.app.language,
});

const mapDispatchToProps = {
    restorePassword: appOperations.restorePassword,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withLoadingModal(props => props.isLoading, 'Restoring Password'),
        withStateHandlers({
            email: '',
            isValid: false,
            isValidEmail: false,
            success: false,
            errorMessage: '',
        }, {
            onChange: () => (field, value) => ({
                [field]: value,
            }),
            showInvalidFields: props => () => ({
                isValidEmail: !(props.email.trim().includes('@')),
            }),
        }),
        withHandlers({
            navigateToSignIn: props => () => props.navigation.navigate(screens.SignIn),
            navigateToSignUp: props => () => props.navigation.navigate(screens.SignUp),
            restorePassword: props => async () => { // eslint-disable-line
                if (!props.isValid) {
                    props.showInvalidFields();
                    return;
                }

                props.onChange('isValidEmail', false);

                try {
                    props.onChange('errorMessage', '');
                    await props.restorePassword({
                        email: props.email,
                    });
                    props.onChange('success', true);
                } catch (err) {
                    props.onChange('errorMessage', 'Something went wrong');
                }
            },
        }),
        lifecycle({
            componentDidMount() {
                Keyboard.addListener('keyboardDidShow', () => this.props.onChange('isShowingKeyboard', true));
                Keyboard.addListener('keyboardDidHide', () => this.props.onChange('isShowingKeyboard', false));
            },
        }),
        withPropsOnChange(
            ['email'],
            (props) => {
                const isValid = (
                    props.email.trim().includes('@')
                );
                props.onChange('isValid', isValid);
            },
        ),
        withLanguageOnChange('language', 'auth.restorePassword.header'),
    ),
)(RestorePasswrodComponent);