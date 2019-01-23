import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';
import { Button, CartButton } from '../../components';
import screens from '../../navigation/screens';

const ProductScreen = ({
    product,
    addItemToCart,
}) => (
    <SafeAreaView style={s.container}>
        <ScrollView contentContainerStyle={s.containerScroll}>
            <Image
                style={s.image}
                source={{ uri: product.image }}
            />
            <Text style={s.title}>{product.title}</Text>
            <Text style={s.price}>{product.price} грн</Text>
            <Text style={s.description}>{product.description}</Text>
            <Button large onPress={() => addItemToCart({ id: product.id, value: 1 })}>
                Add to Cart
            </Button>
            <View style={s.bottomSpace} />
        </ScrollView>
        <View style={s.footer}>
            <Text style={s.footerPrice}>Price: {product.price} грн</Text>
            <Button large onPress={() => addItemToCart({ id: product.id, value: 1 })}>
                Add to Cart
            </Button>
        </View>
    </SafeAreaView>
);

ProductScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title') || 'Product',
    headerRight: (
        <CartButton onPress={() => navigation.navigate(screens.Cart)} />
    ),
});

export default ProductScreen;