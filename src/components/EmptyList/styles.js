import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screens.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.screens.backgroundContentColor,
        fontSize: 20,
        paddingBottom: 20,
        textAlign: 'center',
    },
});