import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { DrawerButton } from '../../components';

const ProfileScreen = ({ user }) => (
    <View style={s.container}>
        <Text>Profile</Text>
        <Text>
            First Name:
            {user.firstName}
        </Text>
        <Text>
            Last Name:
            {user.lastName}
        </Text>
        <Text>
            Email:
            {user.email}
        </Text>
        <Text>
            Registred at:
            {`${new Date(user.created_at).getFullYear()}.${new Date(user.created_at).getMonth()}.${new Date(user.created_at).getDate()}`}
        </Text>
    </View>
);

ProfileScreen.navigationOptions = () => ({
    headerTitle: 'Profile',
    headerLeft: () => (
        <DrawerButton />
    ),
});

export default ProfileScreen;