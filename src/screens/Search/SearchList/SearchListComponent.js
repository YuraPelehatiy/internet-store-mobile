import React from 'react';
import { View, FlatList } from 'react-native';
import i18n from 'ex-react-native-i18n';
import s from './style';
import { Loader, EmptyList } from '../../../components';

const SearchListComponent = ({
    products,
    renderProductButton,
    onEndReached,
    isLoading,
    search,
}) => (
    <View style={s.productList}>
        <FlatList
            style={s.flatList}
            contentContainerStyle={[s.flatListContent, products.length === 0 && s.emptyList]}
            data={products}
            ListEmptyComponent={(
                <EmptyList
                    message={products.length === 0 && search.length !== 0
                        ? i18n.t('main.search.emptyListNotFound.message')
                        : i18n.t('main.search.emptyListYet.message')
                    }
                    iconName='magnify'
                />
            )}
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

export default SearchListComponent;