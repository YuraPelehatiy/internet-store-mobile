import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import CartNavigator from './CartNavigator';
import AuthNavigator from './AuthNavigator';
import ProfileNavigator from './ProfileNavigator';
import AuthorizedDrawer from '../components/Drawer/AuthorizedDrawer';

export default createDrawerNavigator({
    [screens.Home]: HomeNavigator,
    [screens.Profile]: {
        screen: ProfileNavigator,
        navigationOptions: {
            title: 'Profile',
        },
    },
    [screens.AboutUs]: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
        },
    },
    [screens.Cart]: {
        screen: CartNavigator,
        navigationOptions: {
            title: 'Cart',
        },
    },
    [screens.SignIn]: {
        screen: AuthNavigator,
        navigationOptions: {
            title: 'Sign Out',
        },
    },
}, {
    initialRouteName: screens.Home,
    contentComponent: AuthorizedDrawer,
});