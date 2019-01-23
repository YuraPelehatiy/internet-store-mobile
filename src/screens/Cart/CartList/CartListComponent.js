import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../../../components';
import s from './styles';

const CartListComponent = ({
    products,
    renderProductButton,
    cartItems,
    navigateToHomeScreen,
}) => {
    if (products.length === 0) {
        return (
            <View style={s.container}>
                <MaterialCommunityIcons
                    size={100}
                    color='#ccc'
                    name='cart-outline'
                />
                <Text style={s.emptyCartText}>Cart is empty</Text>
                <Button large onPress={() => navigateToHomeScreen()}>Go to home</Button>
            </View>
        );
    }

    return (
        <View style={s.cartList}>
            <FlatList
                style={s.flatList}
                contentContainerStyle={s.flatListContent}
                data={products}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    renderProductButton(item, cartItems)
                )}
            />
        </View>
    );
};

export default CartListComponent;