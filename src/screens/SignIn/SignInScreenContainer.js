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

const mapStateToProps = state => ({
    user: state.app.user,
});

const mapStateToDispatch = {
    signIn: appOperations.signIn,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapStateToDispatch),
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
            signIn: props => async () => {
                try {
                    await props.signIn({
                        email: props.email,
                        password: props.password,
                    });
                    // return props.navigation.navigate(screens.AuthorizedApp);
                } catch (err) {
                    console.log('ERROR');
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

                props.onChange('isValid', isValid);
            },
        ),
    ),
)(SignInScreenComponent);