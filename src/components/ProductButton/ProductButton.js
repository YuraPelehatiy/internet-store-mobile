import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductButton = ({
    // id,
    image,
    name,
    price,
}) => (
    <View>
        <Image
            source={{ uri: image }}
        />
        <Text>
            {name}
        </Text>
        <Text>
            {price}
        </Text>
    </View>
);

export default ProductButton;