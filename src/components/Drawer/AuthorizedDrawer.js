import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DrawerItem from '../DrawerItem/DrawerItem';
import Logo from '../Logo/Logo';
import screens from '../../navigation/screens';
import * as AlertService from '../../services/AlertService';

const AuthorizedDrawer = ({
    navigation,
    activeItemKey,
}) => {
    const items = [
        { separator: true },
        { title: 'Home', key: screens.Home, iconName: 'home' },
        { title: 'About Us', key: screens.AboutUs, iconName: 'info' },
        { title: 'Cart', key: screens.Cart, iconName: 'info' },
        { separator: true },
        { title: 'Profile', key: screens.Profile, iconName: 'info' },
        { separator: true },
        {
            title: 'Sign Out',
            key: 'SingOut',
            iconName: 'info',
            onPress: () => AlertService.signOut(
                () => navigation.navigate(screens.UnauthorizedApp),
            ),
        },
    ];

    return (
        <ScrollView>
            <SafeAreaView
                forceInset={{ top: 'always', horizontal: 'never' }}
            >
                <Logo />
                {items.map((item, index) => (
                    <DrawerItem
                        key={`${item.key}-${index}`}  // eslint-disable-line
                        title={item.title}
                        navigation={navigation}
                        activeItemKey={activeItemKey}
                        screenKey={item.key}
                        iconName={item.iconName}
                        separator={item.separator}
                        onPress={item.onPress}
                    />
                ))}
            </SafeAreaView>
        </ScrollView>
    );
};

export default AuthorizedDrawer;