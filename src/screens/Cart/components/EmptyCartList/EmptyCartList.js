import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';

const EmptyCartList = () => (
    <View style={s.container}>
        <MaterialCommunityIcons
            size={100}
            color='#ccc'
            name='cart-outline'
        />
        <Text style={s.emptyCartText}>Cart is empty</Text>
    </View>
);

export default EmptyCartList;