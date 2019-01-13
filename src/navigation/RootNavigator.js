import { createSwitchNavigator } from 'react-navigation';
import screens from './screens';
import AuthorizedAppNavigator from './AuthorizedAppNavigator';
import UnauthorizedAppNavigator from './UnauthorizedAppNavigator';
import AuthLoadingScreen from '../screens/AuthLoading/AuthLoadingScreen';

export default createSwitchNavigator({
    [screens.AuthLoadign]: AuthLoadingScreen,
    [screens.AuthorizedApp]: AuthorizedAppNavigator,
    [screens.UnauthorizedApp]: UnauthorizedAppNavigator,
}, {
    initialRouteName: screens.UnauthorizedApp,
});