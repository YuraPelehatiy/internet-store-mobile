import React from 'react';
import { View, FlatList } from 'react-native';
import ProductButton from '../../../components/ProductButton/ProductButton';
import s from './style';

const ProductListComponent = ({ products, navigateToProductScreen }) => (
    <View style={s.productList}>
        <FlatList
            style={s.flatList}
            contentContainerStyle={s.flatListContent}
            data={products}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ProductButton
                    {...item}
                    key={item.id}
                    onPress={() => navigateToProductScreen(item)}
                />
            )}
        />
    </View>
);

export default ProductListComponent;