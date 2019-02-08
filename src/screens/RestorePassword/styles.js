import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.authScreens.backgroundColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 0,
        paddingHorizontal: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    textLink: {
        marginVertical: 9,
        fontSize: 16,
        color: colors.authScreens.textLinkColor,
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 55,
        alignSelf: 'stretch',
    },
});