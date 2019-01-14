import React from 'react';
import { TouchableOpacity } from 'react-native';
// import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';

const DrawerButton = props => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <MaterialCommunityIcons
            size={30}
            color={colors.drawerButton.color}
            name='menu'
        />
    </TouchableOpacity>
);

export default DrawerButton;