import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import AboutUsScreen from '../screens/AboutUs/AboutUsScreen';
import { defaultNavigationOptions } from './NavigationOptions';

export default createStackNavigator({
    [screens.AboutUs]: AboutUsScreen,
}, {
    initialRouteName: screens.AboutUs,
    defaultNavigationOptions,
});