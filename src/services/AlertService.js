import { Alert } from 'react-native';

function showAlert(title, subtitle, button, options) {
    Alert.alert(title, subtitle, button, options);
}

export const signOut = (onPress) => {
    showAlert(
        'Sign Out',
        'Are you sure',
        [
            { text: 'Yes', onPress },
            { text: 'No', style: 'cancel' },
        ],
    );
};