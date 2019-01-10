import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        height: 220,
        justifyContent: 'center',
    },
    img: {
        width: 150,
        height: 150,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        maxWidth: 150,
        color: colors.productButton.title,
    },
    price: {
        textAlign: 'center',
        color: colors.productButton.price,
    },
    button: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 5,
    },
    fullWidth: {
        flexDirection: 'row',
    },
    actionButton: {
        flex: 1,
        alignItems: 'center',
    },
});