import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SignInScreen from '../screens/SignIn/SignInScreenContainer';
import SignUpScreen from '../screens/SignUp/SignUpScreenContainer';
import RestorePasswrodScreen from '../screens/RestorePassword/RestorePasswrodContainer';
import { defaultNavigationOptions } from './NavigationOptions';

export default createStackNavigator({
    [screens.SignIn]: SignInScreen,
    [screens.SignUp]: SignUpScreen,
    [screens.RestorePassword]: RestorePasswrodScreen,
}, {
    initialRouteName: screens.SignIn,
    defaultNavigationOptions,
});