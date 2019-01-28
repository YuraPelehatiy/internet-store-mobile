import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        color: '#ccc',
        fontSize: 20,
        paddingBottom: 20,
    },
    emptyList: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartList: {
        flex: 1,
        marginBottom: 57,
    },
    flatList: {
        alignSelf: 'stretch',
    },
    flatListContent: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
});