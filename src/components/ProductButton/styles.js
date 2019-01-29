import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.productButton.backgroundColor,
    },
    img: {
        width: 150,
        height: 150,
    },
    smallImg: {
        width: 120,
        height: 120,
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
        borderColor: colors.productButton.borderColor,
        borderTopWidth: 0.5,
        borderLeftWidth: 0.7,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 1,
        // borderWidth: 1,
        margin: 5,
        padding: 5,
        shadowOffset: { width: 0, height: 2 }, // only for IOS
        shadowColor: '#000', // only for IOS
        shadowRadius: 2, // only for IOS
        shadowOpacity: 0.5, // only for IOS
        elevation: 0.5, // only for Android
    },
    buttonFullWidth: {
        width: '100%',
    },
    fullWidth: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'stretch',
    },
    actionButton: {
        flex: 1,
        alignItems: 'center',
    },
});