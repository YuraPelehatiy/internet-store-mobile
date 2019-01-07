import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 54,
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
    },
    containerActive: {
        backgroundColor: colors.oragne,
    },
    icon: {
        width: 32,
        height: 32,
        marginLeft: 20,
    },
    iconActive: {
        width: 32,
    },
    title: {
        color: colors.black,
        marginLeft: 5,
        fontSize: 17,
    },
    titleActive: {
        color: colors.white,
    },
});