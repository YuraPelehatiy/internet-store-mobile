import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import s from './styles';
import Button from '../Button/Button';

const ProductButton = ({
    // id,
    image,
    title,
    price,
    fullWidth,
    titleButton,
    onPressButton,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <View style={[fullWidth && s.fullWidth]}>
            <View style={[s.container]}>
                <Image
                    source={{ uri: image }}
                    style={s.img}
                />
                <View>
                    <Text>
                        {title}
                    </Text>
                    <Text>
                        {price}
                    </Text>
                </View>
            </View>
            {titleButton
            && onPressButton
            && (
                <View>
                    <Button onPress={onPressButton}>
                        {titleButton}
                    </Button>
                </View>
            )
            }
        </View>
    </TouchableOpacity>
);

export default ProductButton;