import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
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
    headerTitle: 'Home',
    headerLeft: (
        <DrawerButton />
    ),
    headerRight: (
        <CartButton onPress={() => navigation.navigate(screens.Cart)} />
    ),
});

export default HomeScreen;