import React from 'react';
import { View, Text } from 'react-native';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { DrawerButton } from '../../components';

const ProfileScreen = ({ user }) => (
    <View style={s.container}>
        <Text>{i18n.t('main.profile.heading')}</Text>
        <Text>
            {i18n.t('main.profile.firstName')}
            {user.firstName}
        </Text>
        <Text>
            {i18n.t('main.profile.lastName')}
            {user.lastName}
        </Text>
        <Text>
            {i18n.t('main.profile.email')}
            {user.email}
        </Text>
        <Text>
            {i18n.t('main.profile.registredAt')}
            {`${new Date(user.created_at).getFullYear()}.${new Date(user.created_at).getMonth()}.${new Date(user.created_at).getDate()}`}
        </Text>
    </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.t('main.profile.header')),
    headerLeft: () => (
        <DrawerButton />
    ),
});

export default ProfileScreen;