import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';

export default createDrawerNavigator({
    [screens.Home]: HomeNavigator,
    [screens.AboutUs]: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
        },
    },
}, {
    initialRouteName: screens.Home,
});