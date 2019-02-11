import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';

const Button = ({
    onPress,
    children,
    isActive,
    isInProgress,
    large,
    small,
    ...props
}) => (
    <TouchableOpacity
        disabled={isInProgress}
        onPress={onPress}
        {...props}
        style={[
            s.button,
            large && s.buttonLarge,
            small && s.buttonSmall,
            !large && !small && s.buttonMedium,
        ]}
    >
        {isInProgress
            ? (
                <ActivityIndicator size={30} color='#ff8a00' />
            )
            : (
                <MaterialCommunityIcons
                    size={30}
                    name={isActive ? 'heart' : 'heart-outline'}
                    color='#fff'
                />
            )
        }
    </TouchableOpacity>
);

export default Button;