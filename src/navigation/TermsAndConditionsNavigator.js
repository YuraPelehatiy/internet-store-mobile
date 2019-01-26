import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import TermsAndConditionsScreen from '../screens/TermsAndConditions/TermsAndConditionsContainer';
import { defaultNavigationOptions } from './NavigationOptions';

export default createStackNavigator({
    [screens.TermsAndConditions]: TermsAndConditionsScreen,
}, {
    initialRouteName: screens.TermsAndConditions,
    defaultNavigationOptions,
});