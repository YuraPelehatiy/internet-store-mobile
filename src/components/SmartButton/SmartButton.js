import React from 'react';
import {
    TouchableOpacity, ActivityIndicator, Text, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';

const SmartButton = ({
    onPress,
    children,
    isActive,
    isShowLoader,
    large,
    small,
    iconName,
    iconNameActive,
    secondary,
    ...props
}) => (
    <TouchableOpacity
        disabled={isShowLoader}
        onPress={onPress}
        {...props}
        style={[
            s.button,
            large && s.buttonLarge,
            small && s.buttonSmall,
            !large && !small && s.buttonMedium,
            secondary ? s.buttonBackgroundColorSecondary : s.buttonBackgroundColor,
        ]}
    >
        {isShowLoader
            ? (
                <ActivityIndicator size={30} color={colors.smartButton.loaderColor} />
            )
            : (
                <View>
                    {children && <Text style={s.buttonText}>{children}</Text>}
                    {iconName && (
                        <MaterialCommunityIcons
                            size={30}
                            name={isActive ? iconNameActive || iconName : iconName}
                            color={colors.smartButton.iconColor}
                        />
                    )}
                </View>
            )
        }
    </TouchableOpacity>
);

export default SmartButton;