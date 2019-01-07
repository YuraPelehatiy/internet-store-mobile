import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';
import { DrawerButton } from '../../components';

const AboutUsScreen = () => (
    <SafeAreaView style={s.container}>
        <Text>
            About Us Screen
        </Text>
    </SafeAreaView>
);

AboutUsScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'About Us',
    headerLeft: () => (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
});

export default AboutUsScreen;