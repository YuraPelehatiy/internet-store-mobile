import React from 'react';
import { View } from 'react-native';
import s from './styles';
import { DrawerButton } from '../../components';
import CartListContainer from './CartList/CartListContainer';

const CartScreen = () => (
    <View style={s.container}>
        <View style={s.list}>
            <CartListContainer />
        </View>
    </View>
);

CartScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Cart',
    headerLeft: () => (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
});

export default CartScreen;