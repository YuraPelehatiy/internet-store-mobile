import React from 'react';
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';
import { Button } from '../../components';

const ProductScreen = ({
    product,
}) => (
    <SafeAreaView style={s.container}>
        <Text>{product.title}</Text>
        <Image
            style={{ width: 170, height: 300 }}
            source={{ uri: product.image }}
        />
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Button large>
            Add to Cart
        </Button>
    </SafeAreaView>
);

ProductScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title') || 'Product',
});

export default ProductScreen;