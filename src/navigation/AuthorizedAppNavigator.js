import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import CartNavigator from './CartNavigator';
import AuthNavigator from './AuthNavigator';
import ProfileNavigator from './ProfileNavigator';
import AuthorizedDrawer from '../components/Drawer/AuthorizedDrawer';
import SettingsNavigator from './SettingsNavigator';
import TermsAndConditionsNavigator from './TermsAndConditionsNavigator';

export default createDrawerNavigator({
    [screens.Home]: HomeNavigator,
    [screens.Profile]: ProfileNavigator,
    [screens.AboutUs]: AboutUsNavigator,
    [screens.TermsAndConditions]: TermsAndConditionsNavigator,
    [screens.Cart]: CartNavigator,
    [screens.Settings]: SettingsNavigator,
    [screens.SignIn]: AuthNavigator,
}, {
    initialRouteName: screens.Home,
    contentComponent: AuthorizedDrawer,
    drawerWidth: 300,
});