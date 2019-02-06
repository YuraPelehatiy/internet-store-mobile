import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import {
    DrawerButton,
    CartButton,
    HeaderButton,
    SeveralHeaderButtonsWrapper,
    ProductsCount,
} from '../../components';
import ProductListContainer from './ProductList/ProductListContainer';
import screens from '../../navigation/screens';
import s from './styles';

const HomeScreen = ({
    allProductsCount,
    downloadedProductsCount,
}) => (
    <SafeAreaView style={s.container}>
        <View style={s.list}>
            <ProductListContainer />
        </View>
        {!!(allProductsCount) && (
            <ProductsCount
                all={allProductsCount}
                downloaded={downloadedProductsCount}
            />
        )}
    </SafeAreaView>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.translate('main.home.header')),
    headerLeft: (
        <DrawerButton />
    ),
    headerRight: (
        <SeveralHeaderButtonsWrapper>
            <HeaderButton
                onPress={() => navigation.navigate(screens.Search)}
                iconName='magnify'
            />
            <CartButton onPress={() => navigation.navigate(screens.Cart)} />
        </SeveralHeaderButtonsWrapper>
    ),
});

export default HomeScreen;