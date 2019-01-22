import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';

const HeaderButton = ({
    iconName,
    left,
    right,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        style={[left && s.buttonLeft, right && s.buttonRight]}
    >
        <MaterialCommunityIcons
            size={30}
            color={colors.header.headerButtonsColor}
            name={iconName}
        />
    </TouchableOpacity>
);

export default HeaderButton;