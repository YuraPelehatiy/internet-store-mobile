import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    text: {
        color: '#ff8a00',
        fontSize: 40,
    },
    textButton: {
        fontSize: 40,
        padding: 10,
    },
    horizontalStyle: {
        flexDirection: 'row',
    },
});