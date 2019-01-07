import React from 'react';
import { View, Text } from 'react-native';

const CartScreen = () => (
    <View>
        <Text>Cart Screen</Text>
    </View>
);

CartScreen.navigationOptions = () => ({
    title: 'Cart',
});

export default CartScreen;