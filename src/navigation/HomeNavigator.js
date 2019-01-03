import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/Product/ProductScreen';

export default createStackNavigator({
    [screens.Home]: HomeScreen,
    [screens.Product]: ProductScreen,
}, {
    initialRouteName: screens.Home,
});