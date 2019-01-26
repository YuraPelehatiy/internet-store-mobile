import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { DrawerButton } from '../../components';

const TermsAndConditionsComponent = () => (
    <SafeAreaView style={s.container}>
        <Text>
            {i18n.t('main.t&c.content')}
        </Text>
    </SafeAreaView>
);

TermsAndConditionsComponent.navigationOptions = ({ navigation }) => ({
    // headerTitle: i18n.t('main.t&c.header'),
    headerTitle: navigation.getParam('title', i18n.t('main.t&c.header')),
    headerLeft: (
        <DrawerButton />
    ),
});

export default TermsAndConditionsComponent;