import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import i18n from 'ex-react-native-i18n';
import s from './styles';
import { Button, Input, ErrorSubmiting } from '../../components';

const RestorePasswrodComponent = ({
    navigateToSignUp,
    navigateToSignIn,
    success,
    restorePassword,
    onChange,
    email,
    errorMessage,
    isValidEmail,
    isShowingKeyboard,
}) => (
    <KeyboardAvoidingView style={s.container} behavior='padding' keyboardVerticalOffset={40}>
        <View style={s.top}>
            <Text style={s.header}>{i18n.t('auth.restorePassword.heading')}</Text>
            <Input
                value={email}
                onChangeText={text => onChange('email', text)}
                placeholder={i18n.t('auth.restorePassword.inputs.email.placeholder')}
                autoCapitalize='none'
                returnKeyType='next'
                keyboardType='email-address'
            />
            {isValidEmail && <ErrorSubmiting>{i18n.t('auth.restorePassword.inputs.email.error')}</ErrorSubmiting>}
            {success && <Text>{i18n.t('auth.restorePassword.success.submit')}</Text>}
            <ErrorSubmiting>{errorMessage}</ErrorSubmiting>
            {!isShowingKeyboard && (
                <>
                    <Text onPress={navigateToSignIn} style={s.textLink}>
                        {i18n.t('auth.restorePassword.links.toSignIn')}
                    </Text>
                    <Text onPress={navigateToSignUp} style={s.textLink}>
                        {i18n.t('auth.restorePassword.links.toSignUp')}
                    </Text>
                </>
            )}
        </View>
        <View style={s.bottom}>
            <Button large onPress={restorePassword}>{i18n.t('auth.restorePassword.buttons.restorePassword')}</Button>
        </View>
    </KeyboardAvoidingView>
);

RestorePasswrodComponent.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', i18n.t('auth.restorePassword.header')),
});

export default RestorePasswrodComponent;