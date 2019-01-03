import React from 'react';
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import s from './styles';

const ProductScreen = () => (
    <SafeAreaView style={s.container}>
        <Text>Product Screen</Text>
        <Image
            style={{ width: 170, height: 300 }}
            source={{ uri: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/space-gray/Apple-iPhoneX-SpaceGray-1-3x.jpg' }}
        />
    </SafeAreaView>
);

ProductScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title') || 'Product',
});

export default ProductScreen;