import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import s from './styles';

const ProductButton = ({
    // id,
    image,
    title,
    price,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <View style={s.container}>
            <Image
                source={{ uri: image }}
                style={s.img}
            />
            <Text>
                {title}
            </Text>
            <Text>
                {price}
            </Text>
        </View>
    </TouchableOpacity>
);

export default ProductButton;