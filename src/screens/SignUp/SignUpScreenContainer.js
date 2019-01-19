import {
    compose,
    withHandlers,
    withStateHandlers,
    hoistStatics,
    withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import screens from '../../navigation/screens';
import SignUpScreenComponent from './SignUpScreenComponent';
import * as appOperations from '../../modules/app/appOperations';
import { withLoadingModal } from '../../utils/enhancers';

const mapStateToProps = state => ({
    isLoading: state.app.isSigningUp,
});

const mapDispatchToProps = {
    signUp: appOperations.signUp,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withLoadingModal(props => props.isLoading, 'Signing Up...'),
        withStateHandlers({
            firstName: 'Test',
            lastName: 'Mobile',
            email: 'mobile@gmail.com',
            password: 'qwertyui',
            isValid: false,
            isValidFirstName: false,
            isValidLastName: false,
            isValidPassword: false,
            isValidEmail: false,
            errorMessage: '',
        }, {
            onChange: () => (field, value) => ({
                [field]: value,
            }),
            showInvalidFields: props => () => ({
                isValidPassword: !(props.password.trim().length >= 8),
                isValidEmail: !(props.email.trim().includes('@')),
                isValidFirstName: !(props.firstName.trim().length > 0),
                isValidLastName: !(props.lastName.trim().length > 0),
            }),
        }),
        withHandlers({
            navigateToSignIn: props => () => props.navigation.navigate(screens.SignIn),
            navigateToRestorePasswrod: props => () => (
                props.navigation.navigate(screens.RestorePassword)
            ),
            signUp: props => async () => { // eslint-disable-line
                if (!props.isValid) {
                    props.showInvalidFields();
                    return;
                }

                props.onChange('isValidPassword', false);
                props.onChange('isValidEmail', false);
                props.onChange('isValidFirstName', false);
                props.onChange('isValidLastName', false);

                try {
                    props.onChange('errorMessage', '');
                    await props.signUp({
                        firstName: props.firstName,
                        lastName: props.lastName,
                        email: props.email,
                        password: props.password,
                    });
                    return props.navigation.navigate(screens.SignIn); // eslint-disable-line
                } catch (err) {
                    props.onChange('errorMessage', 'User already registered');
                }
            },
        }),
        withPropsOnChange(
            ['email', 'password', 'firstName', 'lastName'],
            (props) => {
                const isValid = (
                    props.password.trim().length >= 8
                    && props.email.trim().includes('@')
                    && props.firstName.trim().length > 0
                    && props.lastName.trim().length > 0
                );
                props.onChange('isValid', isValid);
            },
        ),
    ),
)(SignUpScreenComponent);