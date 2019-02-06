import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.header.backgroundColor,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    input: {
        backgroundColor: colors.header.backgroundColor,
        color: colors.searchBar.textColor,
    },
    inputContainer: {
        backgroundColor: colors.header.backgroundColor,
    },
});