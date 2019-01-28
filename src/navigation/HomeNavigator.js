import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import HomeScreen from '../screens/Home/HomeScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
// import CartScreen from '../screens/Cart/CartScreen';
import { defaultNavigationOptions } from './NavigationOptions';
import SearchScreen from '../screens/Search/SearchScreenContainer';

export default createStackNavigator({
    [screens.Home]: HomeScreen,
    [screens.Product]: ProductScreen,
    [screens.Search]: SearchScreen,
}, {
    initialRouteName: screens.Home,
    defaultNavigationOptions,
});