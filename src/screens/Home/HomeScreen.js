import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerButton, CartButton } from '../../components';
import ProductListContainer from './ProductList/ProductListContainer';
import screens from '../../navigation/screens';
import s from './styles';


const HomeScreen = ({
    navigation,
}) => (
    <SafeAreaView style={s.container}>
        <Text
            onPress={() => navigation.navigate(screens.Product)}
        >
            Home Screen
        </Text>
        <View style={s.list}>
            <ProductListContainer />
        </View>
    </SafeAreaView>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
    headerLeft: (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
    headerRight: (
        <CartButton onPress={() => navigation.navigate(screens.Cart)} />
    ),
});

export default HomeScreen;