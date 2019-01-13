import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import s from './styles';
import { DrawerButton, Button, Input, ErrorSubmiting } from '../../components';

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
}) => (
    <KeyboardAvoidingView style={s.container} behavior='padding'>
        <View style={s.top}>
            <Text style={s.header}>Sign In</Text>
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder='Email'
                autoCapitalize='none'
                returnKeyType='next'
            />
            {isValidEmail && <ErrorSubmiting>Email must have a @</ErrorSubmiting>}
            <Input
                value={password}
                onChangeText={text => onChange('password', text)}
                placeholder='Password'
                autoCapitalize='none'
                returnKeyType='send'
                secureTextEntry
            />
            {isValidPassword && <ErrorSubmiting>Password must be 8 symbols</ErrorSubmiting>}
            <ErrorSubmiting>{errorMessage}</ErrorSubmiting>
            <Text onPress={navigateToSignUp} style={s.textLink}>
                Sign Up
            </Text>
            <Text onPress={navigateToRestorePasswrod} style={s.textLink}>
                Forgot password?
            </Text>
        </View>
        <View style={s.bottom}>
            <Button large onPress={signIn}>Sign In</Button>
        </View>
    </KeyboardAvoidingView>
);

SignInScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Sign In',
    headerLeft: () => (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
});

export default SignInScreen;