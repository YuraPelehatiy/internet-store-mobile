import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/Product/ProductScreenContainer';
import CartScreen from '../screens/Cart/CartScreen';

export default createStackNavigator({
    [screens.Home]: HomeScreen,
    [screens.Product]: ProductScreen,
    [screens.Cart]: CartScreen,
}, {
    initialRouteName: screens.Home,
});