import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import CartScreen from '../screens/Cart/CartScreenContainer';
import ProductScreenContainer from '../screens/Product/ProductScreenContainer';
import { defaultNavigationOptions } from './NavigationOptions';

export default createStackNavigator({
    [screens.Cart]: CartScreen,
    [screens.Product]: ProductScreenContainer,
}, {
    initialRouteName: screens.Cart,
    defaultNavigationOptions,
});