import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    input: {
        borderColor: colors.input.borderColor,
        borderWidth: 1,
        alignSelf: 'stretch',
        padding: 5,
        paddingLeft: 10,
        marginBottom: 8,
        borderRadius: 5,
        fontSize: 18,
    },
});