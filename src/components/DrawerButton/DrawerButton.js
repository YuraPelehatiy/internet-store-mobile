import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// import { withNavigation } from 'react-navigation';
// import { Ionicons } from '@expo/vector-icons';
import s from './styles';

const DrawerButton = props => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <Text style={{ color: '#fff' }}>
            Drawer
        </Text>
    </TouchableOpacity>
);

export default DrawerButton;