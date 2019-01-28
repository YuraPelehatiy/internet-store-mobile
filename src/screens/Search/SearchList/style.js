import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    productList: {
        flex: 1,
    },
    flatList: {
        alignSelf: 'stretch',
    },
    flatListContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyList: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});