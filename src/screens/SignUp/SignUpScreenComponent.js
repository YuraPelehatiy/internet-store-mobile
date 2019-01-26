import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { Button, Input, ErrorSubmiting } from '../../components';

const SignUpScreen = ({
    navigateToSignIn,
    navigateToRestorePasswrod,
    signUp,
    onChange,
    firstName,
    lastName,
    email,
    password,
    errorMessage,
    isValidFirstName,
    isValidLastName,
    isValidEmail,
    isValidPassword,
    isShowingKeyboard,
}) => (
    <KeyboardAvoidingView style={s.container} behavior='padding'>
        <View style={s.top}>
            <Text style={s.header}>{i18n.t('auth.signUp.heading')}</Text>
            <Input
                value={firstName}
                onChangeText={text => onChange('firstName', text)}
                placeholder={i18n.t('auth.signUp.inputs.firstName.placeholder')}
                returnKeyType='next'
            />
            {isValidFirstName && <ErrorSubmiting>{i18n.t('auth.signUp.inputs.firstName.error')}</ErrorSubmiting>}
            <Input
                value={lastName}
                onChangeText={text => onChange('lastName', text)}
                placeholder={i18n.t('auth.signUp.inputs.lastName.placeholder')}
                returnKeyType='next'
            />
            {isValidLastName && <ErrorSubmiting>{i18n.t('auth.signUp.inputs.lastName.error')}</ErrorSubmiting>}
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder={i18n.t('auth.signUp.inputs.email.placeholder')}
                autoCapitalize='none'
                returnKeyType='next'
                keyboardType='email-address'
            />
            {isValidEmail && <ErrorSubmiting>{i18n.t('auth.signUp.inputs.email.error')}</ErrorSubmiting>}
            <Input
                value={password}
                onChangeText={text => onChange('password', text)}
                placeholder={i18n.t('auth.signUp.inputs.password.placeholder')}
                autoCapitalize='none'
                returnKeyType='send'
                secureTextEntry
            />
            {isValidPassword && <ErrorSubmiting>{i18n.t('auth.signUp.inputs.password.error')}</ErrorSubmiting>}
            <ErrorSubmiting>{errorMessage}</ErrorSubmiting>
            {!isShowingKeyboard && (
                <>
                    <Text onPress={navigateToSignIn} style={s.textLink}>
                        {i18n.t('auth.signUp.links.toSignIn')}
                    </Text>
                    <Text onPress={navigateToRestorePasswrod} style={s.textLink}>
                        {i18n.t('auth.signUp.links.toRestorePassword')}
                    </Text>
                </>
            )}
        </View>
        <View style={s.bottom}>
            <Button large onPress={signUp}>{i18n.t('auth.signUp.buttons.signUp')}</Button>
        </View>
    </KeyboardAvoidingView>
);

SignUpScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', i18n.t('auth.signUp.header')),
});

export default SignUpScreen;