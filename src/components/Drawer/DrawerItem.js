import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DrawerItem = ({
    name,
    label,
}) => (
    <TouchableOpacity>
        <View>
            <View>
                <Ionicons
                    size={30}
                    name={name}
                />
            </View>
            <Text>
                {label}
            </Text>
        </View>
    </TouchableOpacity>
);

export default DrawerItem;