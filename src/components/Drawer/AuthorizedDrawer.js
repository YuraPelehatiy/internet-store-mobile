import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import i18n from 'ex-react-native-i18n';
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
        { title: i18n.t('drawer.home'), key: screens.Home, iconName: 'home' },
        { title: i18n.t('drawer.cart'), key: screens.Cart, iconName: 'cart' },
        { separator: true },
        { title: i18n.t('drawer.profile'), key: screens.Profile, iconName: 'account' },
        { separator: true },
        { title: i18n.t('drawer.aboutUs'), key: screens.AboutUs, iconName: 'information' },
        { title: i18n.t('drawer.t&c'), key: screens.TermsAndConditions, iconName: 'file-document' },
        { separator: true },
        { title: i18n.t('drawer.settings'), key: screens.Settings, iconName: 'settings' },
        { separator: true },
        {
            title: i18n.t('drawer.signOut'),
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