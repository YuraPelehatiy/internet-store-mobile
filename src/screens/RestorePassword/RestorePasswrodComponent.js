import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import s from './styles';
import { Button, Input, ErrorSubmiting } from '../../components';

const RestorePasswrodComponent = ({
    navigateToSignUp,
    navigateToSignIn,
    success,
    restorePassword,
    onChange,
    email,
    errorMessage,
    isValidEmail,
}) => (
    <KeyboardAvoidingView style={s.container} behavior='padding' keyboardVerticalOffset={40}>
        <View style={s.top}>
            <Text style={s.header}>Restore password</Text>
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder='Email'
                autoCapitalize='none'
                returnKeyType='next'
                keyboardType='email-address'
            />
            {isValidEmail && <ErrorSubmiting>Please enter a valid email address</ErrorSubmiting>}
            {success && <Text>We have sent instructions for your email</Text>}
            <ErrorSubmiting>{errorMessage}</ErrorSubmiting>
            <Text onPress={navigateToSignIn} style={s.textLink}>
                Sign In
            </Text>
            <Text onPress={navigateToSignUp} style={s.textLink}>
                Sign Up
            </Text>
        </View>
        <View style={s.bottom}>
            <Button large onPress={restorePassword}>Restore Passwrod</Button>
        </View>
    </KeyboardAvoidingView>
);

RestorePasswrodComponent.navigationOptions = () => ({
    title: 'Restore password',
});

export default RestorePasswrodComponent;