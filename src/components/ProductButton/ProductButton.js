import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import s from './styles';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import Touchable from '../Touchable/Touchable'; // eslint-disable-line

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
    samllImage,
    onEnterValue,
    titleActionButton,
    onPressActionButton,
    ...props
}) => (
    <Touchable
        useForeground
        {...props}
        style={[s.button, fullWidth && s.buttonFullWidth]}
    >
        <View style={[s.container, fullWidth && s.fullWidth]}>
            <View>
                {isCounter && (
                    <Counter
                        onEnterValue={onEnterValue}
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
                    style={[s.img, samllImage && s.smallImg]}
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
                    <Button onPress={onPressActionButton} large>
                        {titleActionButton}
                    </Button>
                </View>
            )
            }
        </View>
    </Touchable>
);

export default ProductButton;