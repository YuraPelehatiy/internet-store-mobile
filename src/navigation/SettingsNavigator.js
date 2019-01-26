import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { defaultNavigationOptions } from './NavigationOptions';
import SettingsScreen from '../screens/Settings/SettingsScreenContainer';

export default createStackNavigator({
    [screens.Settings]: SettingsScreen,
}, {
    initialRouteName: screens.Settings,
    defaultNavigationOptions,
});