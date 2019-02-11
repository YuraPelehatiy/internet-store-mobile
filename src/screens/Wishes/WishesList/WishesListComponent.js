import React from 'react';
import { View, FlatList } from 'react-native';
import i18n from 'ex-react-native-i18n';
import { EmptyList } from '../../../components';
import s from './styles';

const WishesListComponent = ({
    products,
    renderProductButton,
    wishItems,
    navigateToHomeScreen,
}) => (
    <View style={s.wishesList}>
        <FlatList
            style={s.flatList}
            contentContainerStyle={[s.flatListContent, products.length === 0 && s.emptyList]}
            ListEmptyComponent={(
                <EmptyList
                    message={i18n.t('main.wishes.emptyWishes.message')}
                    iconName='cart-outline'
                    actionButtonTitle={i18n.t('main.wishes.emptyWishes.actionButton')}
                    opPressNavigateTo={navigateToHomeScreen}
                />
            )}
            data={products}
            numColumns={1}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                renderProductButton(item, wishItems)
            )}
        />
    </View>
);

export default WishesListComponent;