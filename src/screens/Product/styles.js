import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        backgroundColor: colors.screens.backgroundColor,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: 300,
        height: 300,
    },
    imageContainer: {
        paddingTop: 10,
    },
    title: {
        fontSize: 25,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    description: {
        fontSize: 16,
    },
    footer: {
        paddingLeft: 15,
        paddingVertical: 0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#eee',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerPrice: {
        fontSize: 18,
    },
    bottomSpace: {
        marginBottom: 60,
    },
});