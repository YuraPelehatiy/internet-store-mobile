import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';

const AboutUsScreen = () => (
    <SafeAreaView style={s.container}>
        <Text>
            About Us Screen
        </Text>
    </SafeAreaView>
);

AboutUsScreen.navigationOptions = () => ({
    title: 'About Us',
});

export default AboutUsScreen;