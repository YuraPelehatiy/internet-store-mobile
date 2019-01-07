import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';
import CartNavigator from './CartNavigator';
import { UnauthorizedDrawer } from '../components';

export default createDrawerNavigator({
    [screens.Home]: HomeNavigator,
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
            title: 'Sign In',
        },
    },
}, {
    initialRouteName: screens.Home,
    contentComponent: UnauthorizedDrawer,
});