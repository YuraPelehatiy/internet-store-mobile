import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';

export default createDrawerNavigator({
    [screens.Home]: HomeNavigator,
}, {
    initialRouteName: screens.Home,
});