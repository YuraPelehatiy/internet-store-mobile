import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
// import { MaterialIcons } from '@expo/vector-icons';
import s from './styles';
import Separator from '../Separator/Separator';

const DrawerItem = ({
    // iconName,
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
        <TouchableOpacity onPress={() => onPressTouchable()}>
            <View style={[s.container, isActive && s.containerActive]}>
                {/* <MaterialIcons
                    size={30}
                    name={iconName}
                    color={isActive
                        ? '#fff'
                        : '#000'
                    }
                /> */}
                <Text style={[s.title, isActive && s.titleActive]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DrawerItem;