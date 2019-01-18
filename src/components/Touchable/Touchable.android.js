import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
} from 'react-native';

const Touchable = ({ children, ...props }) => {
    if (Platform.Version <= 20) {
        return (
            <TouchableOpacity {...props}>
                {children}
            </TouchableOpacity>
        );
    }

    return (
        <TouchableNativeFeedback
            {...props}
            useForeground={Platform.Version >= 23}
        >
            <View>
                {children}
            </View>
        </TouchableNativeFeedback>
    );
};

export default Touchable;