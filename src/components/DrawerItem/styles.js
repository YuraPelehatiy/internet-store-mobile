import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 54,
        backgroundColor: colors.drawerItem.backgroundColor,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
    },
    containerActive: {
        backgroundColor: colors.drawerItem.backgroundColorActive,
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
        color: colors.drawerItem.text,
        marginLeft: 5,
        fontSize: 17,
    },
    titleActive: {
        color: colors.drawerItem.textActive,
    },
});