import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DrawerButton = props => (
    <TouchableOpacity
        {...props}
    >
        <Ionicons
            size={30}
            name='md-menu'
        />
    </TouchableOpacity>
);

export default DrawerButton;