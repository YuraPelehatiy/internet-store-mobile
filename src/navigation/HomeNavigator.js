import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import HomeScreen from '../screens/Home/HomeScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
// import CartScreen from '../screens/Cart/CartScreen';
import { defaultNavigationOptions } from './NavigationOptions';

export default createStackNavigator({
    [screens.Home]: HomeScreen,
    [screens.Product]: ProductScreen,
}, {
    initialRouteName: screens.Home,
    defaultNavigationOptions,
});