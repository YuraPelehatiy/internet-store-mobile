import React from 'react';
import { Text, Picker, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { DrawerButton, Heading } from '../../components';

const SettingsScreenComponent = ({
    language,
    changeLanguage,
}) => (
    <SafeAreaView style={s.container}>
        <Heading>{i18n.t('main.settings.heading')}</Heading>
        <View style={s.body}>
            <View style={s.setting}>
                <Text style={s.settingTitle}>{i18n.t('main.settings.settings.language.title')}</Text>
                <Picker
                    style={s.picker}
                    selectedValue={language}
                    onValueChange={itemValue => changeLanguage(itemValue)}
                >
                    <Picker.Item label='English' value='en' />
                    <Picker.Item label='Ukrainian' value='uk' />
                </Picker>
            </View>
        </View>
    </SafeAreaView>
);

SettingsScreenComponent.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', i18n.t('main.settings.header')),
    headerLeft: <DrawerButton />,
});

export default SettingsScreenComponent;