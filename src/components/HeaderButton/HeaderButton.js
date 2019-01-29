import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';
import Touchable from '../Touchable/Touchable'; // eslint-disable-line


const HeaderButton = ({
    left,
    right,
    iconName,
    ...props
}) => (
    <Touchable
        borderless
        rippleColor={colors.touchable.darkRippleColor}
        {...props}
        style={[left && s.buttonLeft, right && s.buttonRight]}
    >
        <MaterialCommunityIcons
            size={30}
            color={colors.header.headerButtonsColor}
            name={iconName}
        />
    </Touchable>
);

export default HeaderButton;