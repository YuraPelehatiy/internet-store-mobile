import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    button: {
        backgroundColor: colors.oragne,
        color: colors.white,
        borderWidth: 0,
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: colors.white,
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