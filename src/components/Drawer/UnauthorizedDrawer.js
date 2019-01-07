import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DrawerItem from '../DrawerItem/DrawerItem';
import { UnauthorizedDrawerConfig } from './DrawerConfig';
import Logo from '../Logo/Logo';

const UnauthorizedDrawer = ({
    navigation,
    activeItemKey,
}) => (
    <ScrollView>
        <SafeAreaView
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <Logo />
            {UnauthorizedDrawerConfig.items.map(item => (
                <DrawerItem
                    key={item.id}
                    title={item.title}
                    onPress={() => navigation.navigate(item.key)}
                    isActive={activeItemKey === item.key}
                    iconName={item.iconName}
                    separator={item.separator}
                />
            ))}
        </SafeAreaView>
    </ScrollView>
);

export default UnauthorizedDrawer;