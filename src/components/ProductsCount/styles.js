import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: colors.productCount.backgroundColor,
        bottom: 20,
        left: 20,
        opacity: 0.5,
        padding: 3,
        paddingHorizontal: 7,
        borderRadius: 5,
        borderWidth: 0,
    },
    text: {
        color: colors.productCount.textColor,
    },
});