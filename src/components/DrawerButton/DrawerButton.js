import React from 'react';
import { Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';
import Touchable from '../Touchable/Touchable'; // eslint-disable-line


const DrawerButton = ({ onPress, ...props }) => (
    <Touchable
        borderless
        rippleColor={colors.touchable.darkRippleColor}
        {...props}
        onPress={() => {
            Keyboard.dismiss();
            props.navigation.toggleDrawer();
        }}
        style={s.button}
    >
        <MaterialCommunityIcons
            size={30}
            color={colors.drawerButton.color}
            name='menu'
        />
    </Touchable>
);

export default withNavigation(DrawerButton);