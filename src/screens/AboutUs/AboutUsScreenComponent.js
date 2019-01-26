import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { DrawerButton } from '../../components';

const AboutUsScreenComponent = () => (
    <SafeAreaView style={s.container}>
        <Text>
            {i18n.t('main.aboutUs.content')}
        </Text>
    </SafeAreaView>
);

AboutUsScreenComponent.navigationOptions = ({ navigation }) => ({
    // headerTitle: i18n.t('main.aboutUs.header'),
    headerTitle: navigation.getParam('title', i18n.t('main.aboutUs.header')),
    headerLeft: (
        <DrawerButton />
    ),
});

export default AboutUsScreenComponent;