import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';
import CartNavigator from './CartNavigator';
import { UnauthorizedDrawer } from '../components';
import SettingsNavigator from './SettingsNavigator';
import TermsAndConditionsNavigator from './TermsAndConditionsNavigator';

export default createDrawerNavigator({
    [screens.Home]: HomeNavigator,
    [screens.AboutUs]: AboutUsNavigator,
    [screens.TermsAndConditions]: TermsAndConditionsNavigator,
    [screens.Cart]: CartNavigator,
    [screens.Settings]: SettingsNavigator,
    [screens.SignIn]: AuthNavigator,
}, {
    initialRouteName: screens.Home,
    contentComponent: UnauthorizedDrawer,
});