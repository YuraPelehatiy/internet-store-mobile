import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import screens from '../../navigation/screens';

const RestorePasswrodScreen = ({
    navigation,
}) => (
    <View style={s.container}>
        <Text>Restore Passwrod Screen</Text>
        <Text onPress={() => navigation.navigate(screens.SignUp)}>
            Go to Sign Up Screen
        </Text>
        <Text onPress={() => navigation.navigate(screens.SignIn)}>
            Go to Sign In Screen
        </Text>
    </View>
);

RestorePasswrodScreen.navigationOptions = () => ({
    title: 'Restore Passwrod',
});

export default RestorePasswrodScreen;