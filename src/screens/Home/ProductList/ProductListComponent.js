import React from 'react';
import { View, FlatList } from 'react-native';
import ProductButton from '../../../components/ProductButton/ProductButton';

const ProductListComponent = ({ products, navigateToProductScreen }) => (
    <View>
        <FlatList
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