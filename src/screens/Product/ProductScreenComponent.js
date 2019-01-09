import React from 'react';
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';
import { Button, CartButton } from '../../components';
import screens from '../../navigation/screens';

const ProductScreen = ({
    product,
    addItemToCart,
}) => (
    <SafeAreaView style={s.container}>
        <Text>{product.title}</Text>
        <Image
            style={{ width: 170, height: 300 }}
            source={{ uri: product.image }}
        />
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Button large onPress={() => addItemToCart({ id: product.id, value: 1 })}>
            Add to Cart
        </Button>
    </SafeAreaView>
);

ProductScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title') || 'Product',
    headerRight: (
        <CartButton onPress={() => navigation.navigate(screens.Cart)} />
    ),
});

export default ProductScreen;