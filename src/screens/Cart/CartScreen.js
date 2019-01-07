import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { DrawerButton } from '../../components';

const CartScreen = () => (
    <View style={s.container}>
        <Text>Cart Screen</Text>
    </View>
);

CartScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Cart',
    headerLeft: () => (
        <DrawerButton onPress={() => navigation.toggleDrawer()} />
    ),
});

export default CartScreen;