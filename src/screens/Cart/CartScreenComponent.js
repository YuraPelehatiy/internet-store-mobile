import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
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
            <Text>{i18n.t('main.cart.cart')}: {totalProductCount}</Text>
            <View style={s.priceAndButton}>
                <Text style={s.price}>{i18n.t('main.cart.totalPrice')}: {totalPrice} грн</Text>
                <Button large>{i18n.t('main.cart.buttons.checkOut')}</Button>
            </View>
        </View>
    </SafeAreaView>
);

CartScreenComponent.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.t('main.cart.header')),
    headerLeft: (
        <DrawerButton />
    ),
});

export default CartScreenComponent;