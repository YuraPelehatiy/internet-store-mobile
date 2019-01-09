import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import CartScreen from '../screens/Cart/CartScreen';
import ProductScreenContainer from '../screens/Product/ProductScreenContainer';


export default createStackNavigator({
    [screens.Cart]: CartScreen,
    [screens.Product]: ProductScreenContainer,
}, {
    initialRouteName: screens.Cart,
});