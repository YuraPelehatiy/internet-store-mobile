import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DrawerItem from '../DrawerItem/DrawerItem';
import Logo from '../Logo/Logo';
import screens from '../../navigation/screens';

const UnauthorizedDrawer = ({
    navigation,
    activeItemKey,
}) => {
    const items = [
        { separator: true },
        { title: 'Home', key: screens.Home, iconName: 'home' },
        { title: 'About Us', key: screens.AboutUs, iconName: 'info' },
        { title: 'Cart', key: screens.Cart, iconName: 'info' },
        { separator: true },
        { title: 'Sign In', key: screens.SignIn, iconName: 'info' },
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

export default UnauthorizedDrawer;