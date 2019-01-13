import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
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
    priceAndButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    price: {
        color: '#990000',
    },
});