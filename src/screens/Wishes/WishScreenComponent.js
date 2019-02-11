import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { DrawerButton, Button } from '../../components';
import WishesListContainer from './WishesList/WishesListContainer';

const WishScreenComponent = ({
    totalPrice,
    totalProductCount,
}) => (
    <SafeAreaView style={s.container}>
        <View style={s.list}>
            <WishesListContainer />
        </View>
        <View style={s.footer}>
            <Text>{i18n.t('main.wishes.wishes')}: {totalProductCount}</Text>
            <View style={s.priceAndButton}>
                <Text style={s.price}>{i18n.t('main.wishes.totalPrice')}: {totalPrice} грн</Text>
                <Button large>{i18n.t('main.wishes.buttons.checkOut')}</Button>
            </View>
        </View>
    </SafeAreaView>
);

WishScreenComponent.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.t('main.wishes.header')),
    headerLeft: (
        <DrawerButton />
    ),
});

export default WishScreenComponent;