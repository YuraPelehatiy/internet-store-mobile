import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
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
}) => (
    <KeyboardAvoidingView style={s.container} behavior='padding'>
        <View style={s.top}>
            <Text style={s.header}>Sign Up</Text>
            <Input
                value={firstName}
                onChangeText={text => onChange('firstName', text)}
                placeholder='First name'
                returnKeyType='next'
            />
            {isValidFirstName && <ErrorSubmiting>Please enter a valid first name</ErrorSubmiting>}
            <Input
                value={lastName}
                onChangeText={text => onChange('lastName', text)}
                placeholder='Last name'
                returnKeyType='next'
            />
            {isValidLastName && <ErrorSubmiting>Please enter a valid last name</ErrorSubmiting>}
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder='Email'
                autoCapitalize='none'
                returnKeyType='next'
                keyboardType='email-address'
            />
            {isValidEmail && <ErrorSubmiting>Please enter a valid email address</ErrorSubmiting>}
            <Input
                value={password}
                onChangeText={text => onChange('password', text)}
                placeholder='Password'
                autoCapitalize='none'
                returnKeyType='send'
                secureTextEntry
            />
            {isValidPassword && <ErrorSubmiting>Please enter a valid password, password must be 8 or more symbols</ErrorSubmiting>}
            <ErrorSubmiting>{errorMessage}</ErrorSubmiting>
            <Text onPress={navigateToSignIn} style={s.textLink}>
                Sign In
            </Text>
            <Text onPress={navigateToRestorePasswrod} style={s.textLink}>
                Forgot password?
            </Text>
        </View>
        <View style={s.bottom}>
            <Button large onPress={signUp}>Sign Up</Button>
        </View>
    </KeyboardAvoidingView>
);

SignUpScreen.navigationOptions = () => ({
    title: 'Sign Up',
});

export default SignUpScreen;