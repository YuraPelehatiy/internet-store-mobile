import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DrawerItem from '../DrawerItem/DrawerItem';
import { UnauthorizedDrawerConfig } from './DrawerConfig';

const UnauthorizedDrawer = ({
    navigation,
    activeItemKey,
}) => (
    <ScrollView>
        <SafeAreaView
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            {UnauthorizedDrawerConfig.items.map(item => (
                <DrawerItem
                    key={item.id}
                    title={item.title}
                    onPress={() => navigation.navigate(item.key)}
                    isActive={activeItemKey === item.key}
                    iconName={item.iconName}
                />
            ))}
        </SafeAreaView>
    </ScrollView>
);

export default UnauthorizedDrawer;