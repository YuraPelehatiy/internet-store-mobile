import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    button: {
        color: colors.smartButton.textColor,
        borderWidth: 0,
        borderRadius: 5,
        padding: 10,
    },
    buttonBackgroundColor: {
        backgroundColor: colors.smartButton.backgroundColor,
    },
    buttonBackgroundColorSecondary: {
        backgroundColor: colors.smartButton.backgroundColorSecondary,
    },
    buttonText: {
        color: colors.smartButton.textColor,
        textAlign: 'center',
    },
    buttonLarge: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10,
        fontSize: 14,
    },
    buttonMedium: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        fontSize: 14,
    },
    buttonSmall: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
});