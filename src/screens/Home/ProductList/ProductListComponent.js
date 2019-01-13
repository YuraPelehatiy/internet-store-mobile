import React from 'react';
import { View, FlatList } from 'react-native';
import s from './style';
import { Loader } from '../../../components';

const ProductListComponent = ({
    products,
    renderProductButton,
    onEndReached,
    isLoading,
}) => (
    <View style={s.productList}>
        <FlatList
            style={s.flatList}
            contentContainerStyle={s.flatListContent}
            data={products}
            ListFooterComponent={isLoading && Loader}
            onEndReachedThreshold={0.5}
            onEndReached={() => onEndReached()}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                renderProductButton(item)
            )}
        />
    </View>
);

export default ProductListComponent;