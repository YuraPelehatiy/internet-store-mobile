import { createSwitchNavigator } from 'react-navigation';
import screens from './screens';
import AuthorizedAppNavigator from './AuthorizedAppNavigator';
import UnauthorizedAppNavigator from './UnauthorizedAppNavigator';

export default createSwitchNavigator({
    [screens.AuthorizedApp]: AuthorizedAppNavigator,
    [screens.UnauthorizedApp]: UnauthorizedAppNavigator,
}, {
    initialRouteName: screens.UnauthorizedApp,
});