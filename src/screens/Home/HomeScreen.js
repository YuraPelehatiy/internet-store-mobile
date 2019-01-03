import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import screens from '../../navigation/screens';
import s from './styles';

const HomeScreen = ({
    navigation,
}) => (
    <SafeAreaView style={s.container}>
        <Text
            onPress={() => navigation.navigate(screens.Product)}
        >
            Home Screen
        </Text>
    </SafeAreaView>
);

HomeScreen.navigationOptions = () => ({
    title: 'Home',
});

export default HomeScreen;