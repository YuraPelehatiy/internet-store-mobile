import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import s from './styles';

const Button = ({
    onPress,
    children,
    large,
    small,
    ...props
}) => (
    <TouchableOpacity
        onPress={onPress}
        {...props}
        style={[
            s.button,
            large && s.buttonLarge,
            small && s.buttonSmall,
            !large && !small && s.buttonMedium,
        ]}
    >
        <Text
            style={s.buttonText}
        >
            {children}
        </Text>
    </TouchableOpacity>
);

export default Button;