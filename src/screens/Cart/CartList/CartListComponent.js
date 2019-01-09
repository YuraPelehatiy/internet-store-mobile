import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductButton from '../../../components/ProductButton/ProductButton';
import s from './styles';

const ProductListComponent = ({
    products,
    removeItemFromCart,
    navigateToProductScreen,
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
                    <ProductButton
                        {...item}
                        key={item.id}
                        onPress={() => navigateToProductScreen(item)}
                        fullWidth
                        titleButton='Remove from cart'
                        onPressButton={() => removeItemFromCart({ id: item.id })}
                    />
                )}
            />
        </View>
    );
};

export default ProductListComponent;