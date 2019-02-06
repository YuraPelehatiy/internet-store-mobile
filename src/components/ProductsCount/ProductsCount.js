import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const ProductsCount = ({
    downloaded,
    all,
}) => (
    <View style={s.container}>
        <Text style={s.text}>{downloaded || 0}/{all || 0}</Text>
    </View>
);

export default ProductsCount;