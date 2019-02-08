import { Alert } from 'react-native';
import i18n from 'ex-react-native-i18n';

function showAlert(title, subtitle, button, options) {
    Alert.alert(title, subtitle, button, options);
}

export const signOut = (onPress) => {
    showAlert(
        i18n.t('auth.signOut.title'),
        i18n.t('auth.signOut.subtitle'),
        [
            { text: i18n.t('auth.signOut.buttons.ok'), onPress },
            { text: i18n.t('auth.signOut.buttons.cancel'), style: 'cancel' },
        ],
    );
};

export const error = (title, subtitle, button, options) => {
    showAlert(
        title,
        subtitle,
        button,
        options,
    );
};