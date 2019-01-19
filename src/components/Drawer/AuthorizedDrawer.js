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
import { withLoadingModal } from '../../utils/enhancers';

const AuthorizedDrawer = ({
    signOut,
    navigation,
    activeItemKey,
}) => {
    const items = [
        { separator: true },
        { title: 'Home', key: screens.Home, iconName: 'home' },
        { title: 'Cart', key: screens.Cart, iconName: 'cart' },
        { title: 'About Us', key: screens.AboutUs, iconName: 'information' },
        { separator: true },
        { title: 'Profile', key: screens.Profile, iconName: 'account' },
        { separator: true },
        {
            title: 'Sign Out',
            key: 'SingOut',
            iconName: 'logout',
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

const matStateToProps = state => ({
    isLoadign: state.app.isSigningOut,
});

const mapDispatchToProps = {
    signOut: appOperations.signOut,
};

export default compose(
    connect(
        matStateToProps,
        mapDispatchToProps,
    ),
    withLoadingModal(props => props.isLoadign, 'Signing Out...'),
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