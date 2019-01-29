import React from 'react';
import { View, Text } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';
import Separator from '../Separator/Separator';
import Touchable from '../Touchable/Touchable'; // eslint-disable-line

const DrawerItem = ({
    iconName,
    title,
    onPress,
    activeItemKey,
    screenKey,
    separator,
    navigation,
}) => {
    if (separator) {
        return (
            <Separator />
        );
    }

    const isActive = activeItemKey === screenKey;

    const onPressTouchable = () => {
        if (typeof onPress === 'function') {
            onPress();
        } else {
            navigation.navigate(screenKey);
        }

        navigation.dispatch(DrawerActions.closeDrawer());
    };

    return (
        <Touchable
            onPress={() => onPressTouchable()}
        >
            <View style={[s.container, isActive && s.containerActive]}>
                <MaterialCommunityIcons
                    size={28}
                    name={iconName}
                    color={isActive
                        ? colors.drawerItem.iconActive
                        : colors.drawerItem.icon
                    }
                />
                <Text style={[s.title, isActive && s.titleActive]}>
                    {title}
                </Text>
            </View>
        </Touchable>
    );
};

export default DrawerItem;