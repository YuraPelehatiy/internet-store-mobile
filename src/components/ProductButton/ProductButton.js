import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import s from './styles';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';

const ProductButton = ({
    id,
    image,
    title,
    price,
    count,
    increase,
    decrease,
    isCounter,
    fullWidth,
    titleActionButton,
    onPressActionButton,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <View style={[s.container, fullWidth && s.fullWidth]}>
            <View>
                {isCounter && (
                    <Counter
                        increment={increase}
                        decrement={decrease}
                        value={count}
                        id={id}
                    />
                )}
            </View>
            <View style={[s.container]}>
                <Image
                    source={{ uri: image }}
                    style={s.img}
                />
                <View>
                    <Text style={s.title}>
                        {title}
                    </Text>
                    <Text style={s.price}>
                        {`${price} грн`}
                    </Text>
                </View>
            </View>
            {titleActionButton
            && onPressActionButton
            && (
                <View style={s.actionButton}>
                    <Button onPress={onPressActionButton}>
                        {titleActionButton}
                    </Button>
                </View>
            )
            }
        </View>
    </TouchableOpacity>
);

export default ProductButton;