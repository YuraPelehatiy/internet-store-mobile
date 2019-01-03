import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import screens from '../../navigation/screens';
import DrawerItem from './DrawerItem';

const UnauthorizedDrawer = () => {
    const items = [
        {
            id: 1, label: 'Home', key: screens.Home, iconName: 'md-home',
        },
        {
            id: 2, label: 'About Us', key: screens.AboutUs, iconName: 'md-information-circle-outline',
        },
    ];

    return (
        <ScrollView>
            <SafeAreaView>
                {items.map(item => (
                    <DrawerItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </SafeAreaView>
        </ScrollView>
    );
};

export default UnauthorizedDrawer;