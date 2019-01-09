import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { DrawerButton, Button, Input } from '../../components';

const SignInScreen = ({
    navigateToSignUp,
    navigateToRestorePasswrod,
    signIn,
    onChange,
    email,
    password,
}) => (
    <View style={s.container}>
        <View style={s.top}>
            <Text>Sign In Screen</Text>
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder='Email'
            />
            <Input
                value={password}
                onChangeText={text => onChange('password', text)}
                placeholder='Password'
                secureTextEntry
            />
            <Text onPress={navigateToSignUp}>
                Go to Sign Up Screen
            </Text>
            <Text onPress={navigateToRestorePasswrod}>
                Go to Restore Password Screen
            </Text>
        </View>
        <View style={s.bottom}>
            <Button large onPress={signIn}>Sign In</Button>
        </View>
    </View>
);

SignInScreen.navigationOptions = ({ navigation }) => ({ // eslint-disable-line
    headerTitle: 'Sign In',
    headerLeft: () => (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
});

export default SignInScreen;