import React from 'react';
import {
    Text, Image, View, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { Button, CartButton, SmartButton } from '../../components';
import screens from '../../navigation/screens';

const ProductScreen = ({
    product,
    addItemToCart,
    addOrRemoveWish,
    isWishInItems,
    isWishInProgress,
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
                {i18n.t('main.product.buttons.addToCart')}
            </Button>
            <View style={s.bottomSpace} />
        </ScrollView>
        <View style={s.footer}>
            <Text style={s.footerPrice}>
                {i18n.t('main.product.price')}: {product.price} грн
            </Text>
            <SmartButton
                onPress={() => addOrRemoveWish({ id: product.id })}
                isShowLoader={isWishInProgress}
                isActive={isWishInItems}
                secondary
                iconName='heart-outline'
                iconNameActive='heart'
            />
            <Button large onPress={() => addItemToCart({ id: product.id, value: 1 })}>
                {i18n.t('main.product.buttons.addToCart')}
            </Button>
        </View>
    </SafeAreaView>
);

ProductScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title') || i18n.t('main.product.defaultHeader'),
    headerRight: (
        <CartButton onPress={() => navigation.navigate(screens.Cart)} />
    ),
});

export default ProductScreen;