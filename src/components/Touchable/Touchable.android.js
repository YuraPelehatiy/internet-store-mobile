import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { colors } from '../../styles';

const Touchable = ({
    style,
    children,
    rippleColor,
    backgroundType,
    borderless,
    useForeground,
    ...props
}) => {
    if (Platform.Version <= 20) {
        return (
            <TouchableOpacity {...props} style={style}>
                {children}
            </TouchableOpacity>
        );
    }

    return (
        <TouchableNativeFeedback
            {...props}
            useForeground={Platform.Version >= 23 && useForeground}
            delayPressIn={0}
            background={backgroundType
                ? TouchableNativeFeedback.Ripple[backgroundType]()
                : TouchableNativeFeedback.Ripple(rippleColor, borderless)
            }
        >
            <View style={style}>
                {children}
            </View>
        </TouchableNativeFeedback>
    );
};

Touchable.defaultProps = {
    rippleColor: colors.touchable.rippleColor,
    borderless: false,
    useForeground: false,
};

export default Touchable;