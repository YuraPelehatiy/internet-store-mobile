import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import DrawerItem from '../DrawerItem/DrawerItem';
import Logo from '../Logo/Logo';
import screens from '../../navigation/screens';
import * as AlertService from '../../services/AlertService';
import * as appOperations from '../../modules/app/appOperations';

const AuthorizedDrawer = ({
    signOut,
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
            onPress: () => signOut(),
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

const mapStateToDispatch = {
    signOut: appOperations.signOut,
};

export default compose(
    connect(
        undefined,
        mapStateToDispatch,
    ),
    withHandlers({
        signOut: props => () => AlertService.signOut(
            async () => {
                try {
                    await props.signOut();
                    props.navigation.navigate(screens.UnauthorizedApp);
                } catch (error) {
                    console.log(error);
                }
            },
        ),
    }),
)(AuthorizedDrawer);