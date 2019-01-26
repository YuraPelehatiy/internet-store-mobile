import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import DrawerItem from '../DrawerItem/DrawerItem';
import Logo from '../Logo/Logo';
import screens from '../../navigation/screens';

const UnauthorizedDrawer = ({
    navigation,
    activeItemKey,
}) => {
    const items = [
        { separator: true },
        { title: i18n.t('drawer.home'), key: screens.Home, iconName: 'home' },
        { title: i18n.t('drawer.cart'), key: screens.Cart, iconName: 'cart' },
        { separator: true },
        { title: i18n.t('drawer.aboutUs'), key: screens.AboutUs, iconName: 'information' },
        { title: i18n.t('drawer.t&c'), key: screens.TermsAndConditions, iconName: 'file-document' },
        { separator: true },
        { title: i18n.t('drawer.settings'), key: screens.Settings, iconName: 'settings' },
        { separator: true },
        { title: i18n.t('drawer.signIn'), key: screens.SignIn, iconName: 'login' },
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