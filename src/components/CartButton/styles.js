import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    button: {
        marginRight: 10,
        padding: 5,
    },
    cartButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        color: colors.cartButton.color,
        fontSize: 14,
    },
});