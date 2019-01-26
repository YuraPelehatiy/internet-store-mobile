import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import { DrawerButton, CartButton } from '../../components';
import ProductListContainer from './ProductList/ProductListContainer';
import screens from '../../navigation/screens';
import s from './styles';

const HomeScreen = () => (
    <SafeAreaView style={s.container}>
        <View style={s.list}>
            <ProductListContainer />
        </View>
    </SafeAreaView>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.translate('main.home.header')),
    headerLeft: (
        <DrawerButton />
    ),
    headerRight: (
        <CartButton onPress={() => navigation.navigate(screens.Cart)} />
    ),
});

export default HomeScreen;