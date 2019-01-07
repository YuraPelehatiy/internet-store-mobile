import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export default createStackNavigator({
    [screens.Profile]: ProfileScreen,
}, {
    initialRouteName: screens.Profile,
});