import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import i18n from 'ex-react-native-i18n';
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
                <Text style={s.emptyCartText}>{i18n.t('main.cart.emptyCart.message')}</Text>
                <Button large onPress={() => navigateToHomeScreen()}>{i18n.t('main.cart.emptyCart.actionButton')}</Button>
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