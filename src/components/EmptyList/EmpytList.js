import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../styles';
import Button from '../Button/Button';
import s from './styles';

const EmptyList = ({
    message,
    iconName,
    opPressNavigateTo,
    actionButtonTitle,
}) => (
    <View style={s.container}>
        <MaterialCommunityIcons
            size={100}
            color={colors.screens.backgroundContentColor}
            name={iconName}
        />
        <Text style={s.text}>{message}</Text>
        {actionButtonTitle && (
            <Button
                large
                onPress={() => opPressNavigateTo()}
            >
                {actionButtonTitle}
            </Button>
        )}
    </View>
);

export default EmptyList;