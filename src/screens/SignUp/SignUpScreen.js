import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import screens from '../../navigation/screens';

const SignUpScreen = ({
    navigation,
}) => (
    <View style={s.container}>
        <Text>Sign Up Screen</Text>
        <Text onPress={() => navigation.navigate(screens.SignIn)}>
            Go to Sign In Screen
        </Text>
        <Text onPress={() => navigation.navigate(screens.RestorePassword)}>
            Go to Restore Password Screen
        </Text>
    </View>
);

SignUpScreen.navigationOptions = () => ({
    title: 'Sign Up',
});

export default SignUpScreen;