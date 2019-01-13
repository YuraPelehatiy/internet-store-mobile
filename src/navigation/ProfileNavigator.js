import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';
import { defaultNavigationOptions } from './NavigationOptions';

export default createStackNavigator({
    [screens.Profile]: ProfileScreen,
}, {
    initialRouteName: screens.Profile,
    defaultNavigationOptions,
});