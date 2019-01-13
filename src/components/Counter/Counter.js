import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    // TextInput,
} from 'react-native';
import s from './styles';

const Counter = ({
    id,
    value,
    increment,
    decrement,
    // onEnterValue,
    horizontal,
}) => (
    <View style={[s.container, horizontal && s.horizontalStyle]}>
        <TouchableOpacity onPress={() => increment({ id })}>
            <Text style={s.textButton}>+</Text>
        </TouchableOpacity>
        <Text style={s.text}>{value}</Text>
        {/* <TextInput
            style={s.text}
            value={String(value)}
            onChangeText={(text) => {
                console.log('value', value);
                console.log('text', text);
                console.log('Number text', Number(text));
                if (text.match(/^\d+$/) || text.trim().length === 0) {
                    onEnterValue({ value: Number(text), id });
                }
            }}
        /> */}
        <TouchableOpacity onPress={() => decrement({ id })}>
            <Text style={s.textButton}>-</Text>
        </TouchableOpacity>
    </View>
);

export default Counter;