import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';

const DrawerButton = props => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <Ionicons
            size={30}
            name='md-menu'
        />
    </TouchableOpacity>
);

export default DrawerButton;