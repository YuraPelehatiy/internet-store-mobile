import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { DrawerButton } from '../../components';

const ProfileScreen = () => (
    <View style={s.container}>
        <Text>Profile Screen</Text>
    </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    headerLeft: () => (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
});

export default ProfileScreen;