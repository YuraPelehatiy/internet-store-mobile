import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import CartScreen from '../screens/Cart/CartScreen';


export default createStackNavigator({
    [screens.Cart]: CartScreen,
}, {
    initialRouteName: screens.Cart,
});