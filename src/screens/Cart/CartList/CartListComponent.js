import React from 'react';
import { View, FlatList, Text } from 'react-native';
// import ProductButton from '../../../components/ProductButton/ProductButton';
import s from './styles';

const ProductListComponent = ({
    products,
    renderProductButton,
    cartItems,
}) => {
    if (products.length === 0) {
        return (
            <View style={s.container}>
                <Text>Cart is empty</Text>
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

export default ProductListComponent;