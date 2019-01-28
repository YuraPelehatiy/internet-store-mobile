import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import {
    DrawerButton,
    Button,
    Input,
    ErrorSubmiting,
} from '../../components';

const SignInScreen = ({
    navigateToSignUp,
    navigateToRestorePasswrod,
    signIn,
    onChange,
    email,
    password,
    errorMessage,
    isValidEmail,
    isValidPassword,
    isShowingKeyboard,
}) => (
    <KeyboardAvoidingView style={s.container} behavior='padding' keyboardVerticalOffset={40}>
        <View style={s.top}>
            <Text style={s.header}>{i18n.t('auth.signIn.heading')}</Text>
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder={i18n.t('auth.signIn.inputs.email.placeholder')}
                autoCapitalize='none'
                returnKeyType='next'
                keyboardType='email-address'
            />
            {isValidEmail && <ErrorSubmiting>{i18n.t('auth.signIn.inputs.email.error')}</ErrorSubmiting>}
            <Input
                value={password}
                onChangeText={text => onChange('password', text)}
                placeholder={i18n.t('auth.signIn.inputs.password.placeholder')}
                autoCapitalize='none'
                returnKeyType='send'
                secureTextEntry
            />
            {isValidPassword && <ErrorSubmiting>{i18n.t('auth.signIn.inputs.password.error')}</ErrorSubmiting>}
            <ErrorSubmiting>{errorMessage}</ErrorSubmiting>
            {!isShowingKeyboard && (
                <>
                    <Text onPress={navigateToSignUp} style={s.textLink}>
                        {i18n.t('auth.signIn.links.toSignUp')}
                    </Text>
                    <Text onPress={navigateToRestorePasswrod} style={s.textLink}>
                        {i18n.t('auth.signIn.links.toRestorePassword')}
                    </Text>
                </>
            )}
        </View>
        <View style={s.bottom}>
            <Button large onPress={signIn}>{i18n.t('auth.signIn.buttons.signIn')}</Button>
        </View>
    </KeyboardAvoidingView>
);

SignInScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.t('auth.signIn.header')),
    headerLeft: () => (
        <DrawerButton />
    ),
});

export default SignInScreen;