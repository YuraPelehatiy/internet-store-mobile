import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import s from './styles';

const Counter = ({
    id,
    value,
    increment,
    decrement,
}) => (
    <View style={s.container}>
        <TouchableOpacity onPress={() => increment({ id })}>
            <Text style={s.textButton}>+</Text>
        </TouchableOpacity>
        <Text style={s.text}>{value}</Text>
        <TouchableOpacity onPress={() => decrement({ id })}>
            <Text style={s.textButton}>-</Text>
        </TouchableOpacity>
    </View>
);

export default Counter;