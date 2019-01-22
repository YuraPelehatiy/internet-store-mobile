import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';
import { DrawerButton, Button } from '../../components';
import CartListContainer from './CartList/CartListContainer';

const CartScreenComponent = ({
    totalPrice,
    totalProductCount,
}) => (
    <SafeAreaView style={s.container}>
        <View style={s.list}>
            <CartListContainer />
        </View>
        <View style={s.footer}>
            <Text>Cart: {totalProductCount}</Text>
            <View style={s.priceAndButton}>
                <Text style={s.price}>Price: {totalPrice} грн</Text>
                <Button large>Check Out</Button>
            </View>
        </View>
    </SafeAreaView>
);

CartScreenComponent.navigationOptions = () => ({
    headerTitle: 'Cart',
    headerLeft: () => (
        <DrawerButton />
    ),
});

export default CartScreenComponent;