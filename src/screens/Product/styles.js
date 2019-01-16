import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#aaa',
    },
    containerScroll: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'stretch',
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
});