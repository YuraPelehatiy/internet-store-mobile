import React from 'react';
import { View, Image, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import s from './styles';

const DrawerLogo = ({ showUser }) => (
    <View style={s.container}>
        <Image
            style={s.size}
        />
        {showUser && (
            <>
                <Avatar
                    containerStyle={s.avatart}
                    rounded
                    size={85}
                />
                <Text>User</Text>
            </>
        )}
    </View>
);

export default DrawerLogo;