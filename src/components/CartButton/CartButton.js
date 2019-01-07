import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import s from './styles';

const CartButton = props => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <Text>
            Cart
        </Text>
    </TouchableOpacity>
);

export default CartButton;